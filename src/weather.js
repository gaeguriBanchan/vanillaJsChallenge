const API_KEY = '79a953993b899930bf13b2272c945ae3';

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  // console.log('You live in', lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weatherContainer = document.querySelector(
        '.weather span:first-child'
      );
      const city = document.querySelector('.weather span:last-child');
      city.innerText = data.name;
      weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
  alert('Can not find you. No weather for you.');
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
