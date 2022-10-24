// api.openweathermap.org/data/2.5/weather?q={city}&appid={APIKey}

// const options = {method: 'GET'};

fetch('http://api.openweathermap.org/data/2.5/weather?q=London&appid=e33fb596a1cab070a75ee3b5b9aa3a27', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

var APIKey = "e33fb596a1cab070a75ee3b5b9aa3a27";
var city;
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

fetch(queryURL)
console.log(queryURL)

// function fetchData(){
//   console.log()
//   const userInput = $('#user-input').val();
//   const selectedParam = $('#selected-param').find(':selected').val();

//   const query = 

// }