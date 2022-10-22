api.openweathermap.org/data/2.5/weather?q={city}&appid={APIKey}

var APIKey = "e33fb596a1cab070a75ee3b5b9aa3a27";
var city;
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

fetch(queryURL)
console.log(queryURL)