import axios from 'axios';

axios.defaults.baseURL = 'https://api.openweathermap.org';


export const getWeatherByCoords = async (lat, lon) => {
  const URL = `/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5c8dab899c73e9fec8517804e94f0209&units=metric`
  return await axios(URL);
}