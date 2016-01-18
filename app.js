console.log('starting password manager');

var storage = require('node-persist');
storage.initSync();

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

var testAccount = getAccount('Jorge');
console.log(testAccount);