import { showNotification } from './script.js'



async function getData() {
  const res = await fetch('./data.json')
  const data  = await res.json();
  console.log(data)
  showNotification(data);
}

getData()