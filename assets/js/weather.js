// This gets the current day and displays in the id tag of the main card block which also displays the city name

let currentDay = document.getElementById("currentDay");
let today = new Date();
let day = `${today.getDate() < 10 ? "0" : ""}${today.getDate()}`;
let month = `${today.getMonth() + 1 < 10 ? "0" : ""}${today.getMonth() + 1}`;
let year = today.getFullYear();

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
    // console.log(name, icon, temp, humidity, speed);
    document.querySelector(".city").innerText = name;
    document.querySelector("#icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".temp").innerText = "Temp: " + temp + " °F";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".speed").innerText = "Wind: " + speed + " MPH";
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