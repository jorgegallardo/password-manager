console.log('starting password manager');

var storage = require('node-persist');
storage.initSync();

var argv = require('yargs')
  .command('create', 'Creates an account', function(yargs) {
    yargs.options({
      name: {
        demand: true,
        alias: 'n',
        description: 'Create an account.',
        type: 'string'
      },
      username: {

      },
      password: {

      }
    }).help('help');
  })
  .command('get', 'Gets an account' function() {
    yargs.options({
      name: {
        demand: true,
        alias: 'g',
        description: 'Gets an account.',
        type: 'string'
      }
    }).help('help');
  })
  .help('help') //gives the description found in the .command()
  .argv;

// create (creates account -- name, username, password)
// get -- name (gets the account as long as you pass in the name)

//account.name
//account.username
//account.password

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

