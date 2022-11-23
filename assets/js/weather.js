// This gets the current day and displays in the id tag of the main card block which also displays the city name

let currentDay = document.getElementById("currentDay");
let today = new Date();
let day = `${today.getDate() < 10 ? "0" : ""}${today.getDate()}`;
let month = `${today.getMonth() + 1 < 10 ? "0" : ""}${today.getMonth() + 1}`;
let year = today.getFullYear();
// let cityList = [];
// this cityList is a variable that you can assign the previous searched cities

currentDay.textContent = `${month} / ${day} / ${year}`;

  let weather = {
    apiKey: "ea18aa3b77d0e7dd90319c2b59567cb8",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
  displayWeather: function (data) {
    const { name } = data;
    const { icon } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, temp, humidity, speed);
    document.querySelector(".city").innerText = name;
    document.querySelector("#icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".temp").innerText = "Temp: " + temp + " °F";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".speed").innerText = "Wind: " + speed + " MPH";
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};
document.querySelector(".btn").addEventListener("click", function () {
  event.preventDefault();
  weather.search();
});

document
  .querySelector("#searchCity.search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

// five day request
// api.openweathermap.org/data/2.5/forecast?lat=40.5247777&lon=-111.8627989&appid=ea18aa3b77d0e7dd90319c2b59567cb8

// lat and lon request
// http://api.openweathermap.org/geo/1.0/direct?q=Draper&limit=1&appid=ea18aa3b77d0e7dd90319c2b59567cb8

// one day request
//  https://api.openweathermap.org/data/2.5/weather?q=draper&units=metric&appid=ea18aa3b77d0e7dd90319c2b59567cb8

// You need to create a new api request that grabs the lat and lon from the city that you are searching for. Then you import the lat and lon into the 5 day api request to get data specific for that city.
// Once you pull the 5 day request it will come in an array of 40 and you need to separate the information by 8 because it is every 3 hours for 5 days. Only ge the information that you need and import that into your html elements.
//For the previous search history you need to be able to assign the name to a clickable button that searches again for that city which includes the one day and the five day.
//You'll need a whole function that does both the five day and one day in one click of the search button