import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { getRefs } from './getRefs'
const refs = getRefs()
const options = {
    totalItems: 10,
      itemsPerPage: 20,
      visiblePages: 7,
      page: 1,
}
const pagination = new Pagination('#tui-pagination-container', options);
console.dir(pagination);
const page = pagination.getCurrentPage()
fetchImages(page).then(({ images, total }) => { pagination.reset(total);renderImages(images)})
function fetchImages(page) {
    return fetch(`https://pixabay.com/api/?key=4823621-792051e21e56534e6ae2e472f&q=sun&page=${page}&per_page=20`,)
        .then(res => res.json())
        .then(data => ({images: data.hits, total: data.totalHits}))
}
 
function renderImages(images) {
    console.log(images);
    console.log(`render`);
}
const populationImg = event => {
  fetchImages(event.page).then(({
    images
  }) => {
    renderImages(images)
  });
}

pagination.on('afterMove', populationImg)
const imageBySearch= event => {
  fetchImagesBySearch(event.page).then(({
    images
  }) => {
    renderImagesBySearch(images)
  });
}

refs.searchInput.addEventListener('submit', event => {
    event.preventDefault();

    pagination.off('afterMove', populationImg)

    pagination.on('afterMove', imageBySearch)
    const place = event.currentTarget.elements.place.value;
    fetchImagesBySearch(page, place).then(({
      images,
      total
    }) => {
      pagination.reset(total);
      renderImagesBySearch(images)
    })
})

function fetchImagesBySearch (page, place) {
    return fetch(`https://pixabay.com/api/?key=4823621-792051e21e56534e6ae2e472f&q=${place}&page=${page}&per_page=20`, )
      .then(res => res.json())
      .then(data => ({
        images: data.hits,
        total: data.totalHits
      }))
}
function renderImagesBySearch (images) {
    console.log(images);
    console.log(`renderBySearch`);
}