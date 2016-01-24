console.log('starting password manager');

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
      }
    }).help('help');
  })
  .help('help') // allows user to type in node filename.js --help and get the command description
  .argv;
var command = argv._[0];

if(command === 'create' && typeof argv.name !== 'undefined' && typeof argv.username !== 'undefined' && typeof argv.password !== 'undefined') {
  var createdAccount = createAccount({
    name: argv.name,
    username: argv.username,
    password: argv.password
  });
  console.log("Account created!");
  console.log(createdAccount);
} else if(command === 'get' && typeof argv.name !== 'undefined') {
  var fetchedAccount = getAccount(argv.name);
  if(typeof fetchedAccount === 'undefined') {
    console.log("Account not found.");
  } else {
    console.log("Account found!");
    console.log(fetchedAccount);
  }
} else {
  console.log("Invalid command.");
}

function createAccount(account) {
  var accounts = storage.getItemSync('accounts');

  if(typeof accounts === 'undefined') {
    accounts = [];
  }
  accounts.push(account);
  storage.setItemSync('accounts', accounts);

  return account;
}

function getAccount(accountName) {
  var accounts = storage.getItemSync('accounts');

  for (var i = 0; i < accounts.length; i++) {
    if(accounts[i].name === accountName) {
      return accounts[i];
    }
  }
  return undefined;
}

// createAccount({
//   name: 'Jorge',
//   username: 'yeah@right.com',
//   password: 'password'
// });
// var testAccount = getAccount('Jorge');
// console.log(testAccount);