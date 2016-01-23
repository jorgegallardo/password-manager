var argv = require('yargs')
  .command('hello', 'Greets the user', function(yargs) {
    yargs.options({
      name: {
        demand: true,
        alias: 'n', // alias is like a shortcut
        description: 'Your first name goes here'
      },
      lastname: {
        demand: true,
        alias: 'l',
        description: 'Your last name goes here'
      }
    }).help('help');
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