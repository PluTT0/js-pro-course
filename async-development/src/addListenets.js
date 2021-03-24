import { getWeather } from './getWether.js'
import { createHistoryBlock } from './index.js'

const cityInput = document.querySelector('#city_input');
const countryInput = document.querySelector('#country_input');
const buttonSubmit = document.querySelector('#button_submit');
const locationBtn = document.querySelector('#button_location');
const historyBtn = document.querySelector('.historyBtn');
const clearHistoryBtn = document.querySelector('.clearHistoryBtn');
const weatherCard = document.querySelector(`.weatherBlock`);



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
  debugger
  eve.preventDefault();
  if(cityInput.value === '') {
    return;
  } else if(document.querySelector('.weatherHistoryBlock')) {
    getWeather(cityInput.value,countryInput.value);
    document.querySelector('.weatherHistoryBlock').remove();
    cityInput.value = '';
    countryInput.value = '';
  } else {
    getWeather(cityInput.value,countryInput.value)
    cityInput.value = '';
    countryInput.value = '';
  }
});
  
locationBtn.addEventListener('click',(eve) =>{
  eve.preventDefault();
  if(document.querySelector('.weatherHistoryBlock')) {
    document.querySelector('.weatherHistoryBlock').remove();
    myLocalPosition()
  } else {
    myLocalPosition()
  }
})

historyBtn.addEventListener('click', () => {
  if(document.querySelector('.weatherHistoryBlock')) {
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
