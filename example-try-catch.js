function doWork() {
  // throw error that says 'unable to do work'
  // throw is how you create an exception in a try catch statement. it is used to catch custom errors that can be accessed in the catch section.
  throw new Error('Unable to do work.');
}

// try section has code that will run if there are no errors in it
try {
  doWork();
} catch(e) { // catch section has the code that will run if that was an error in the try section. its parameter 'e' is passed the error.
  console.log(e.message);
} finally {
  console.log('Finally block executed!');
}
console.log('Try catch ended.');