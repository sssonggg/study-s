const API_KEY = "cb260549f47672291c2386a5a04c0fb8";
const weatherElement = document.getElementById("weather"); // 날씨 정보를 표시할 엘리먼트를 가져옵니다.

function onGeo(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
  .then(response => response.json())
  .then(data => {
    const weather = document.querySelector("#weather .temp");
    const city = document.querySelector("#weather .city");
    const weatherIcon = document.createElement("img"); 

    city.innerText = data.name;
    const temp = Math.round(data.main.temp);
    weather.innerText = `${temp} °C`;

    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

    weatherIcon.src = iconUrl; 
    weatherElement.appendChild(weatherIcon); 
  });
}

function onGeoError(error) {
  alert("Geolocation error:", error.message);
}

 navigator.geolocation.getCurrentPosition(onGeo, onGeoError);