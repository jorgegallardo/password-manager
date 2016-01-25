/*var argv = require('yargs').argv;

if(argv.bananas > 3) {
  console.log('That\'s a lot of bananas!');
} else {
  console.log('You need more bananas.');
}*/

/*var argv = require('yargs')
  .usage('Usage: $0 -w [width] -h [height]')
  .demand(['w','h'])
  .argv;
console.log('The area is: ' + argv.w * argv.h);*/

/*var argv = require('yargs')
  //.command('command name', 'command description', handler function)
  .command('create', 'Create an account.', function(yargs) {
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
        description: 'Account username.',
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
  .command('get', 'Find an account.', function(yargs) {
    yargs.options({
      name: {
        demand: true,
        alias: 'g',
        description: 'Gets an account.',
        type: 'string'
      }
    }).help('help');
  })
  .help('help') // allows user to type in node filename.js --help and get the command description
  .argv;
var command = argv._[0];

if(command === 'create' && argv.name && argv.username && argv.password) {
  console.log("I'm gonna create an account.");
} else if(command === 'get' && argv.name) {
  console.log("I'm gonna get your account.")
} else {
  console.log("Invalid command.");
}*/

function blah(y) {
  return "whoa " + y;
}
function first(x) {
  var sugar = blah(x);
  console.log(sugar + " it works");
}

first("hi");