import axios from 'axios';

export const getWeatherByCoords = async (lat, lon) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5c8dab899c73e9fec8517804e94f0209&units=metric`
  return axios(URL);
}