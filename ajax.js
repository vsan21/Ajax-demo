//jQuery - manipulating the DOM through events
//need to add CDN into your index.html file, as well as your JS file
//Within your JS file, add your jQuery

// $(document).ready(() => {
//   //attach a listener to the button
//   $('#click-me').click(() => {
//     //on button press, call into the nasa api
//     $.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
//   .then(response => {
//     //when we get the response, replace the filler text with the explanation from the response
//     console.log(response);
//     $('#replace-me').text(response.explanation);
//   })
//   .catch(error => {
//     console.log(error);
//   });
//   })
// })

function replaceText(data) {
  $('#replace-me').text(data.name);
}

function doAPICall(event) {
  //attach a listener to the button
  $('#click-me').click(() => {
    var userInput = $('#user-data').val();
    let starWarsData = {};
    //on button press, call into the star wars api
    $.get('https://swapi.co/api/' + userInput)
  .then(response => {
    starWarsData = response;
    //when we get the response, replace the filler text with the explanation from the response
    console.log(starWarsData);
    replaceText(starWarsData);
  })
  .catch(error => {
    console.log(error);
  });

  //this won't log anything. We get the {} and THEN do we get the actually data. This gets logged before the API call.
  // console.log(starWarsData);
  // $('#replace-me').text(starWarsData.name);

  })
  // console.log('hi1');
}

function onceReady() {
  //passing a function, not invoking it.
  $('#click-me').click(doAPICall);
  console.log('hi1');
}

$(document).ready(onceReady);

// console.log('hi2');

//hi2 will log before hi1 because hi1 is in a function and anything not in a function will automatically log, and also hi1 is waiting for the document to finish loading before executing. If hi2 was in a function, it would still load before hi1 because hi1 has the $(document).ready...
