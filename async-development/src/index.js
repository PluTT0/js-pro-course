import { getWeather } from './getWether.js'

const cityInput = document.querySelector('#city_input');
const countryInput = document.querySelector('#country_input');
const buttonSubmit = document.querySelector('#button_submit');
const locationBtn = document.querySelector('#button_location');
const weatherCard = document.querySelector(`.weatherBlock`);
const weatherTitle = document.querySelector(`.weather_title`);
const weatherIconElement = document.querySelector(`.weather_icon`);
const weatherValue = document.querySelector(`.weather_value`);
const weatherSubtitle = document.querySelector(`.weather_subtitle`);
const weatherFeals = document.querySelector(`.weather_feals`);
const historyBtn = document.querySelector('.historyBtn');
const clearHistoryBtn = document.querySelector('.clearHistoryBtn');


export function displayWeather(data) {
  weatherCard.style.display = 'flex';
  weatherIconElement.setAttribute('src', data.current.weather_icons);

  weatherSubtitle.textContent = `Now on the street: ${data.current.weather_descriptions}`;
  weatherValue.textContent = `${data.current.temperature}°C`;
  weatherTitle.textContent = `${data.location.name},${data.location.country}`;
  weatherFeals.textContent = `Feals like: ${data.current.feelslike}°C`;
  setInLockalStorage(data);
}

const setInLockalStorage = (data) => {
  const weatherData = JSON.parse(localStorage.getItem('weatherHistory')) || {};
  weatherData[data.location.name] = {
    location: `${data.location.name} ,${data.location.country}`,
    weatherValue: `${data.current.temperature}°C`,
    feelsLike: `${data.current.feelslike}°C`,
    weatherDescription: `${data.current.weather_descriptions}`,
    wind_speed: `${data.current.wind_speed}m/h`,
    observation_time: `${data.current.observation_time}`,
    local_time: `${data.location.localtime}`
    };
  localStorage.setItem('weatherHistory', JSON.stringify(weatherData));
}

const createHistoryBlock = () => {
  document.querySelector(`.weatherBlock`).style.display = 'none';
  const weatherData = JSON.parse(localStorage.getItem('weatherHistory'));
  const weatherHistoryBlock = document.createElement('div');
  weatherHistoryBlock.classList.add('weatherHistoryBlock');
  document.querySelector('.container').append(weatherHistoryBlock);

  for(let key in weatherData) {
    const wetherHistoryCard = document.createElement('ul');
    wetherHistoryCard.classList.add('weatherHistoryCard');
    wetherHistoryCard.innerHTML =`
      <li><h4>${weatherData[key].location}</h4></li>
      <li><span>Temperature:</span> ${weatherData[key].weatherValue}</li>
      <li><span>Feals like:</span> ${weatherData[key].feelsLike}</li>
      <li><span>Weather description:</span>${weatherData[key].weatherDescription}</li>
      <li><span>Wind speed:</span> ${weatherData[key].wind_speed}</li>
      <li><span>Observation time:</span> ${weatherData[key].observation_time}</li>
      <li><span>Local time:</span> ${weatherData[key].local_time}</li>
    `;
    document.querySelector('.weatherHistoryBlock').append(wetherHistoryCard);
  }
  console.log(weatherData);
}

const myLocalPosition = () =>{
  function success(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    getWeather(latitude,longitude);
  }
  function error(){
  alert('I can not find your position');
  }
  navigator.geolocation.getCurrentPosition(success,error);
}


buttonSubmit.addEventListener('click', (eve)=>{
  eve.preventDefault();
  if(cityInput.value === '') {
    return;
  } else if(document.querySelector('.weatherHistoryBlock')) {
    getWeather(cityInput.value,countryInput.value);
    document.querySelector('.weatherHistoryBlock').remove();
  } else {
    getWeather(cityInput.value,countryInput.value)
  }
});
  
locationBtn.addEventListener('click',(eve) =>{
  eve.preventDefault();
  if(document.querySelector('.weatherHistoryBlock')){
    document.querySelector('.weatherHistoryBlock').remove();
    myLocalPosition()
  } else {
    myLocalPosition()
  }
})

historyBtn.addEventListener('click', () => {
  if(document.querySelector('.weatherHistoryBlock')){
    return;
  } else if(weatherCard.style.display === 'flex') {
    weatherCard.style.display = 'none';
    createHistoryBlock();
  } else {
    createHistoryBlock();
  }
})
  
clearHistoryBtn.addEventListener('click', () =>{
  if(document.querySelector('.weatherHistoryBlock')) {
    localStorage.removeItem('weatherHistory');
    document.querySelector('.weatherHistoryBlock').remove();
  } else {
    localStorage.removeItem('weatherHistory');
  }
})
