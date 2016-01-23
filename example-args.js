var argv = require('yargs')
  .command('hello', 'Greets the user', function(yargs) {
    yargs.options({
      name: {                                       // --name ______
        demand: true,
        alias: 'n',                                 // alias = shortcut
        description: 'Your first name goes here',
        type: 'string'                              // value is required, otherwise just -n -l would acceptable
      },
      lastname: {
        demand: true,
        alias: 'l',
        description: 'Your last name goes here',
        type: 'string'
      }
    }).help('help'); //gives description found in each option
  })
  .help('help') //gives the description found in the .command()
  .argv;

var command = argv._[0];
console.log(argv);

if(command === 'hello' && typeof argv.name !== 'undefined') {
  if(typeof argv.lastname !== 'undefined') {
    console.log('Hello ' + argv.name + ' ' + argv.lastname + '!');
  } else {
    console.log('Hello ' + argv.name + '!');
  }
} else if(command === 'hello') {
  console.log('Hello world!');
}