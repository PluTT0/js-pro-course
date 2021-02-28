const form = document.forms.user_form;
const city_input = document.querySelector('#city_input');

const button = document.querySelector('#button_submit');

const HOST = `http://api.weatherstack.com/`;
const access = 'current?access_key=be44a583ec1740ffa9bed5ab0baba134&query=';



const getWeather = (eve) =>{
  eve.preventDefault()
  if (eve.keyCode === 13 || eve.type === "click") {
    fetch(HOST + access + city_input.value)
      .then(res => {
        return res.json();
      }).then(data =>{
        console.log(data)
        return displayWeather(data)
      })
  }
    
}

button.addEventListener('click', getWeather);

function displayWeather(data) {

  let city = data.location.name;
  let country = data.location.country;
  let temperature = data.current.temperature;
  let feelsLike = data.current.feelslike;
  let weatherIcon = data.current.weather_icons;
  let weatherDescription = data.current.weather_descriptions;

  let weatherCard = document.querySelector(`.weather`)
  let weatherTitle = document.querySelector(`.weather_title`);
  let weatherIconElement = document.querySelector(`.weather_icon`);
  let weatherValue = document.querySelector(`.weather_value`)
  let weatherSubtitle = document.querySelector(`.weather_subtitle`)
  let weatherFeals = document.querySelector(`.weather_feals`)


  weatherCard.style.display = 'flex'
  weatherIconElement.setAttribute('src', weatherIcon);

  weatherSubtitle.textContent = `Now at the street: ${weatherDescription}`
  weatherValue.textContent = `${temperature}°C`
  weatherTitle.textContent = `${city},${country}`
  weatherFeals.textContent = `Feals like: ${feelsLike}°C`
  
}


