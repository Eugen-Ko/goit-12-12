import axios from 'axios';

// axios.defaults.baseURL = 'https://api.openweathermap.org';


export const searcheImageByPlace = async (place) => {
 const url = `https://pixabay.com/api/?image_type=backgrounds&orientation=horizontal&q=${place}&per_page=20&key=4823621-792051e21e56534e6ae2e472`;
  return await axios(url);
}



