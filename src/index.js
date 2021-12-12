import './sass/main.scss';
import './js/getWeatherByCoords';
import { getWeatherByCoords } from './js/getWeatherByCoords'
import { getRefs } from './js/getRefs'

const refs = getRefs()
refs.temperDegree
let long = 0;
let lat = 0;
function setTextContent(weather, name, main) {
  refs.temperDegree.textContent = Math.round(main.temp)
  refs.locationTimeZone.textContent = name
  refs.weatherDescr.textContent = weather[0].main
  refs.weatherIcon.src = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
}


if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(position => {
      
    
    long = position.coords.longitude;
    lat = position.coords.latitude;
    
    getWeatherByCoords(lat, long)
      .then(({ data }) => { 
        const { weather, main, name } = data
        setTextContent(weather, name, main)
 
       });
  
  })
}

