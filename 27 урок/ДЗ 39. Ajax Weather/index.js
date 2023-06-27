function getWeather() {
  var city = document.getElementById('city-input').value;
  var xhr = new XMLHttpRequest();
  var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19&lang=ua`;

  xhr.open('GET', url, true);
  xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
          if (xhr.status === 200) {
              var response = JSON.parse(xhr.responseText);
              var temperature = response.main.temp;
              var pressure = response.main.pressure;
              var description = response.weather[0].description;
              var humidity = response.main.humidity;
              var windSpeed = response.wind.speed;
              var windDirection = response.wind.deg;
              var iconCode = response.weather[0].icon;

              // Вивести отримані дані у відповідних елементах HTML
              document.getElementById('temperature').textContent = temperature + " °C";
              document.getElementById('pressure').textContent = pressure + " hPa";
              document.getElementById('description').textContent = description;
              document.getElementById('humidity').textContent = humidity + "%";
              document.getElementById('wind-speed').textContent = windSpeed + " m/s";
              document.getElementById('wind-direction').textContent = windDirection + "°";
              document.getElementById('icon').src = "http://openweathermap.org/img/w/" + iconCode + ".png";
          } else {
              alert('Помилка: Місто не знайдено!');
          }
      }
  };
  xhr.send();
}