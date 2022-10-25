// api.openweathermap.org/data/2.5/weather?q={city}&appid={APIKey}

// const options = {method: 'GET'};


//This url is only used to get the weather data for the current date and time

let weather = {
  apiKey: "ea18aa3b77d0e7dd90319c2b59567cb8",
  fetchWeather: function(city){
    fetch(
        "http://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=imperial&appid="
        + this.apiKey
    )
    .then((response) => response.json())
    .then((data) => console.log(data));
  },
  displayWeather: function(data) {

  }
};


//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));






// var APIKey = "ea18aa3b77d0e7dd90319c2b59567cb8";
// var city;
// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

// fetch(queryURL)
// console.log(queryURL)

// function fetchData(){
//   console.log()
//   const userInput = $('#user-input').val();
//   const selectedParam = $('#selected-param').find(':selected').val();

//   const query = 

// }