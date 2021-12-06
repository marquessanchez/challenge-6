$('button').on('click', handleClick);
var weather_key = "c153f79bfc1e5d24b20be0ac9d41ee78";
var today = document.querySelector("#weather")
var textInputEl = document.querySelector("#text-input");
var citySearchEl = document.querySelector("#city-search");
//var buttonEl = document.querySelector("#search-btn");
function handleClick() {
  
  let history = localStorage.history;
  if(history == undefined) {
    history = $('input').value;
  } else {
    history += ',' + $('input').value;
  }; 
  localStorage.history = history;
};

//fetch("https://api.openweathermap.org/data/2.5/weather?id=524901&appid=c153f79bfc1e5d24b20be0ac9d41ee78").then(function(response){
  //response.json().then(function(data) {
  //displayWeather(data)
//});
//});

var weatherContainerEl = document.querySelector("weather-container");
textInputEl.append(weather-container);

var getWeather = function(city) {
  var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=c153f79bfc1e5d24b20be0ac9d41ee78";

  fetch(apiUrl).then(function(response){
    if (response.ok){
    response.json().then(function(data){
      console.log(data);
      displayWeather(data);
    })}
  })
};

var displayWeather = function(data){
  var name = data.name;
  today.textContent = name;
}

citySearchEl.addEventListener("submit", function(event){
  event.preventDefault(event);
  var city = textInputEl.value.trim();
  getWeather(city);
  //console.log("click");
});













