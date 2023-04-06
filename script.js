//1. Поясніть своїми словами, як ви розумієте поняття асинхронності у Javascript
//Асинхронність в js - це можливість виконня паралельно декількох операцій водночас, не чекаючи на завершення кожної з них. 


const getIpButton = document.querySelector('.get-ip-btn');
const geoInfo = document.querySelector('.geo-info');
const continent = document.querySelector('#continent');
const country = document.querySelector('#country');
const region = document.querySelector('#region');
const city = document.querySelector('#city');
const district = document.querySelector('#district');

getIpButton.addEventListener('click', async () => {
  try {
    const ipResponse = await fetch('https://api.ipify.org/?format=json');
    const ipData = await ipResponse.json();
    const clientIp = ipData.ip;

    const geoResponse = await fetch(`http://ip-api.com/json/${clientIp}?fields=66846719`);
    const geoData = await geoResponse.json();
    console.log(geoData);

    continent.textContent = geoData.continent;
    country.textContent = geoData.country;
    region.textContent = geoData.region;
    city.textContent = geoData.city;
    district.textContent = geoData.district;
    geoInfo.style.display = 'block';

  } catch (error) {
    console.error(error);
  }
});




