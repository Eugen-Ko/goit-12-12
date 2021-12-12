import './sass/main.scss';
import './js/getWeatherByCoords';
import {getWeatherByCoords} from './js/getWeatherByCoords'

let long = 0;
let lat = 0;



if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(position => {
      
    console.log(position)
    long = position.coords.longitude;
    lat = position.coords.latitude;
    
    getWeatherByCoords(lat, long)
     .then (data => console.log(data));

    console.log(`lat ${lat}`, `long ${long}`);

  })
}

