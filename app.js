fetch("http://api.openweathermap.org/data/2.5/weather?q=DNIPRO&units=metric&APPID=5d066958a60d315387d9492393935c19")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let tempDiv = document.querySelector('#temp');
        let cityDiv = document.querySelector('#city');
        let presureDiv = document.querySelector('#presure');
        let descriptionDiv = document.querySelector('#discription');
        let humidityDiv = document.querySelector('#humidity');
        let speedDiv = document.querySelector('#speed');
        let degDiv = document.querySelector('#deg');
        let img = document.querySelector('img');

        let { feels_like, grnd_level, humidity, pressure, sea_level, temp } = data.main;
        let { speed, deg } = data.wind;
        let city = data.name;
        let description = data.weather[0].description;
        let icon = data.weather[0].icon;
        cityDiv.textContent = `${city}`;
        presureDiv.textContent = ` Pressure: ${pressure}`;
        descriptionDiv.textContent = `Description: ${description}`;
        tempDiv.textContent = `${Math.round(temp)}`;
        humidityDiv.textContent = `Humidity: ${humidity}`;
        speedDiv.textContent = `Wind speed: ${speed} m/sec`;
        degDiv.textContent = `Wind deg: ${deg}`;
        img.setAttribute("src", `http://openweathermap.org/img/w/${icon}.png`);
    });