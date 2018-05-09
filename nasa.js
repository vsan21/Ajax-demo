//AJAX - Asynchronous JavaScript And XML (most often not XML, but is JSON)

//.get is a ajax request

//make sure you have a package.json file: otherwise you can make one:
    // {
    // "dependencies": {
    //   "https": ....
    //   }
    // }
//npm install request --save (library) --> so that whoever downloads your files, it will automatically download this for them, and they don't have to manually do it on their machine
//import in your file: const request = require('request')
    //another library is 'https' --> but harder to use!
// const request = require('request');
//
// const baseURL = 'https://swapi.co/api/';
// request(baseURL + 'planets/1', { json: true }, (err, res, body) => {
//   if (err) { return console.log(err); }
//   console.log(body.url);
//   console.log(body);
// });


//**Using REQUEST or axios when you want to do a AJAX request on the backend (requesting data from other people's APIs)
    //Making request through command line
//When you want to make a request to your own database --> jQuery



//RESTFUL API - way to format your URL
//GET - read/queries the database
//POST - create/add to the database
//PUT - updates
//DELETE - deletes


//DIFFERENT LIBRARIES: main two kinds:
//request: CALLBACK-based
//axios: PROMISES-based (ability to do chaining)

const axios = require('axios');

function makeCall() {
  // promise-based
  axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then(response => {
    console.log(response.data.url);
    console.log(response.data.explanation);
  })
  .catch(error => {
    console.log(error);
  });
}

function sayHi() {
  console.log('hi');
}

// module.exports = {makeCall: makeCall};
//or
// module.exports = makeCall;

//can exports multiple things
// module.exports = {makeCall, sayHi};
module.exports = {makeNasaAPICall: makeCall, sayHi}
//here you would do nasa.makeNasaAPICall();
