// This gets the current day and displays in the id tag of the main card block which also displays the city name
let currentDay = document.getElementById("currentDay");
let today = new Date();
let day = `${today.getDate() < 10 ? "0" : ""}${today.getDate()}`;
let month = `${today.getMonth() + 1 < 10 ? "0" : ""}${today.getMonth() + 1}`;
let year = today.getFullYear();

currentDay.textContent = `${month} / ${day} / ${year}`;

//This url is only used to get the weather data for the current date and time
let weather = {
  apiKey: "ea18aa3b77d0e7dd90319c2b59567cb8",
  fetchWeather: function (city) {
    fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=imperial&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, temp, humidity, speed);
    document.querySelector(".city").innerText = name;
    // document.querySelector(".icon").src = "https://openweathermap.org/img/wn/10d@2x.png";// "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector(".temp").innerText = "Temp: " + temp + " °F";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".speed").innerText = "Wind: " + speed + " MPH";
  },
};

weather.fetchWeather("draper");
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

// api.openweathermap.org/data/2.5/weather?q={city}&appid={APIKey}

// const options = {method: 'GET'};

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
