import './sass/main.scss';
import { getWeatherByCoords } from './js/getWeatherByCoords'
import { getRefs } from './js/getRefs'
import { getPositionByCoords } from './js/getPositionByCords'
import { searcheImageByPlace } from './js/searchImageByPlace';



const refs = getRefs()
// refs.temperDegree
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
  
    getPositionByCoords(lat, long).then(({ data }) => {
      const places = data.results[0].components.city
      console.log(places)

      searcheImageByPlace(places).then(setBackgraund)
    })

  })
}

function setBackgraund({data}) {
  console.log(data)
  const randomIntegerFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
      };
      const randomImg = randomIntegerFromInterval(0, data.hits.length - 1);
      document.body.style = `background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)),
  url('${data.hits[randomImg].largeImageURL}') center fixed; background-size: cover;`;
console.log(randomImg)
}

