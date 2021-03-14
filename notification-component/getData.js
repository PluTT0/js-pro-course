import { showNotification } from './script.js'


async function getData() {
  const res = await fetch('./data.json')
  const data  = await res.json();
  showNotification(data);
  console.log(data)
}

getData()