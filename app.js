console.log('starting password manager');
var crypto = require('crypto-js');
var storage = require('node-persist');
storage.initSync();
var argv = require('yargs')
  //.command('command name', 'command description', handler function)
  .command('create', 'Create a new account.', function(yargs) {
    //yargs.options({}).help('help');
    yargs.options({
      name: {
        demand: true,
        alias: 'n',
        description: 'Account name.',
        type: 'string'
      },
      username: {
        demand: true,
        alias: 'u',
        description: 'Account username or email.',
        type: 'string'
      },
      password: {
        demand: true,
        alias: 'p',
        description: 'Account password.',
        type: 'string'
      },
      masterPassword: {
        demand: true,
        alias: 'm',
        description: 'Master password.',
        type: 'string'
      }
    }).help('help'); // allows user to type in create -n --help to get help on what's required, otherwise it'll say Missing required arguments: username, password
  })
  .command('get', 'Get an existing account.', function(yargs) {
    yargs.options({
      name: {
        demand: true,
        alias: 'n',
        description: 'Gets an account.',
        type: 'string'
      },
      masterPassword: {
        demand: true,
        alias: 'm',
        description: 'Master password.',
        type: 'string'
      }
    }).help('help');
  })
  .help('help') // allows user to type in node filename.js --help and get the command description
  .argv;
var command = argv._[0];

if(command === 'create' && argv.name && argv.username && argv.password) {
  var createdAccount = createAccount({
    name: argv.name,
    username: argv.username,
    password: argv.password
  }, argv.masterPassword);
  console.log("Account created!");
  console.log(createdAccount);
} else if(command === 'get' && argv.name) {
    var fetchedAccount = getAccount(argv.name, argv.masterPassword);
    if(!fetchedAccount) {
      console.log("Account not found.");
    } else {
      console.log("Account found!");
      console.log(fetchedAccount);
    }
} else {
  console.log("Invalid command.");
}

function getAccounts(masterPassword) {
  // use getItemSync to fetch accounts
  var encryptedAccount = storage.getItemSync('accounts');
  var accounts = [];
  // decrypt
  if(encryptedAccount) {
    var bytes = crypto.AES.decrypt(encryptedAccount, masterPassword);
    var accounts = JSON.parse(bytes.toString(crypto.enc.Utf8));
  }
  // return accounts array
  return accounts;
}

function saveAccounts(accounts, masterPassword) {
  // encrypt accounts
  var encryptedAccounts = crypto.AES.encrypt(JSON.stringify(accounts), masterPassword);
  // setItemSync to save encrypted accounts
  storage.setItemSync('accounts', encryptedAccounts.toString());
  // return accounts array
  return accounts;
}

function createAccount(account, masterPassword) {
  // var accounts = storage.getItemSync('accounts');
  // if(!accounts) {
  //   accounts = [];
  // }
  var accounts = getAccounts(masterPassword);
  accounts.push(account);
  // storage.setItemSync('accounts', accounts);
  saveAccounts(accounts, masterPassword);
  return account;
}

function getAccount(accountName, masterPassword) {
  // var accounts = storage.getItemSync('accounts');
  var accounts = getAccounts(masterPassword);
  for (var i = 0; i < accounts.length; i++) {
    if(accounts[i].name === accountName) {
      return accounts[i];
    }
  }
  return null;
}

// createAccount({
//   name: 'Jorge',
//   username: 'yeah@right.com',
//   password: 'password'
// });
// var testAccount = getAccount('Jorge');
// console.log(testAccount);