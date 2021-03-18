import { displayWeather } from './index.js';

const HOST = `http://api.weatherstack.com/`;
const access = 'current?access_key=be44a583ec1740ffa9bed5ab0baba134&query=';

export const getWeather = (firstInput,seccondInput) =>{
  try{
    fetch(HOST + access + firstInput + ',' + seccondInput)
      .then(res => {
        return res.json();
      }).then(data =>{
        console.log(data);
        displayWeather(data);
      })  
  } catch {
    document.querySelector(`.weatherBlock`).innerHTML=`
    <h2>Something was wrong</h2>`
  }
  
     
}




