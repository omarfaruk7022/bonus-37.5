const API_KEY = '9e49b616815c350dc820fa2358db30a8'
const searchButton = () =>{
    const cityName = document.getElementById('input-field').value
    const url = `
    https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric
    `
    
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemp(data))
}


const setInnerText = (id,text) => {
    document.getElementById(id).innerText = text;
}

const displayTemp = temperature =>{
setInnerText('city' ,temperature.name)
setInnerText('temperature',temperature.main.temp)
setInnerText('condition',temperature.weather[0].main)
const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
const imgIcon = document.getElementById('weather-icon')
imgIcon.setAttribute('src', url)
console.log(temperature);
}