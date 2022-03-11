$('button').on('click', handleClick);
var today = document.querySelector("#weather")
var textInputEl = document.querySelector("#text-input");
var citySearchEl = document.querySelector("#city-search");
// var buttonEl = document.querySelector("#search-btn");
function handleClick() {
  let history = localStorage.history;
  if(history == undefined) {
    history = $('input').value;
  } else {
    history += ',' + $('input').value;
  }; 
  localStorage.history = history;
};

var weatherContainerEl = document.querySelector("weather-container");
//textInputEl.append(weather-container);

var getWeather = function(city) {
  var url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${weather_key}`
  fetch(url).then(function(response){
    if (response.ok){
      response.json().then(function(data){
        console.log(data);
        apiData = data;
        let lat = data[0].lat;
        let lon = data[0].lon;
        
        var fiveday = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${weather_key}`
        fetch(url).then(function(response){
          if (response.ok){
            response.json().then(data=> {
              console.log(data);
              dataApi = data;

              document.getElementById('fiveday').append += dataApi.daily;
            })
          }
        });
        
        var apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${weather_key}&units=imperial`

        fetch(apiUrl).then(response => {
          if (response.ok) {
            response.json().then(data => {
              console.log(data);
              dataApi = data;

              document.getElementById('temp').innerText += data.current.temp;
              document.getElementById('wind').innerText += data.current.wind_speed;
              document.getElementById('humidity').innerText += data.current.humidity;
              document.getElementById('uv-index').innerText += data.current.uvi;
            })
          }
        })
      })
    }}
    )
  };

        // for (let i = 7; i < data.list.length; i=i+8) {
        //   let weather = data.list[i];
         $('fiveday').append(`
            <div class="col-md-2 bg-secondary ms-5 px-2 pt-3 text-white">
        //       <h6>3/31/2021</h6>
        //       <span>icon</span>
        //       <h6>Temp:73.72 F</h6>
        //       <h6>Wind: 9.53 MPH</h6>
        //       <h6>Humidity: 66 %</h6>
        //     </div>
        //   `)
      // displayWeather(data);

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














