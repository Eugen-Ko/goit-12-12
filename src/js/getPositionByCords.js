import axios from 'axios';

// axios.defaults.baseURL = 'https://api.openweathermap.org';


export const getPositionByCoords = async (lat, long) => {
  const apiKey = 'd4683b09d0c94ec0aebf0b2e043decbf';
    const urlPosition = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=${apiKey}&language=en`;
  return await axios(urlPosition);
}

