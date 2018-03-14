// GET

//create object and save in xhr
const xhr = new XMLHttpRequest();

const url = 'http://api-to-call.com/endpoint';

//responseType of object to 'json'
xhr.responseType = 'json';
 
//event handler
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log(xhr.response);
  }
};


xhr.open('GET', url);
xhr.send();


// POST

const xhr = new XMLHttpRequest();
const url = 'http://api-to-call.com/endpoint';

//converts data to a string
const data = JSON.stringify({id: '200'});
xhr.responseType = 'json';
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log(xhr.response);
  }
};
xhr.open('POST', url);
xhr.send(data);
