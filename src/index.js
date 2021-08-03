
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/fontawesome';
import './sass/main.scss';
import { fetchImages } from './js/connections';
import Notiflix from "notiflix";
import SimpleLightbox from "simplelightbox";
import photoCardsTemplates from './templates/photoCards.hbs';
import 'simplelightbox/dist/simple-lightbox.css';

const gallery = document.querySelector('.gallery');
const formSubmit = document.querySelector('#search-form');
const loadMoreBtn = document.querySelector('#load-more');
const searchWrapper = document.querySelector('.search-wrapper');

let page = 1;
const imagesPerPage = 40;
let currentPage = 0;
let numberOfPages = 0;
let query = '';

formSubmit.addEventListener('submit', searchImages);
loadMoreBtn.addEventListener('click', loadMoreImages);


const lightbox = new SimpleLightbox('.gallery a', { /* options */ });

async function searchImages(e) {
  
    e.preventDefault();
    loadMoreBtn.style.display = 'none';

    page = 1;
    currentPage = 1;

    query = e.currentTarget.elements.searchQuery.value.trim();

    if (!query) {
      return;
    }

    try {
      const images = await fetchImages({ query, page, imagesPerPage });
      if (images.data.hits.length === 0) {
        Notiflix.Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.',
        );
        return;
      }

      numberOfPages = Math.ceil(images.data.totalHits / imagesPerPage);

      console.log(numberOfPages);
      gallery.innerHTML = photoCardsTemplates (images.data.hits);
      Notiflix.Notify.success(`Hooray! We found ${images.data.totalHits} images.`);
      lightbox.refresh();
  
    } catch (error) {
      console.log('Something went wrong', error.message);
  }

  if (numberOfPages > 1) {
    loadMoreBtn.style.display = 'block';
  }
}

async function loadMoreImages (e) {

  e.preventDefault();
  console.log('page');
  page += 1;
  currentPage += 1;
  console.log(page);

  if (!query) {
    return;
  }

  try {

    const images = await fetchImages({ query, page, imagesPerPage });
    gallery.insertAdjacentHTML('beforeend', photoCardsTemplates (images.data.hits));
    lightbox.refresh();

  } catch (error) {
    console.log('Something went wrong', error.message);
}

if (currentPage === numberOfPages) {
  loadMoreBtn.style.display = 'none';
  Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
}

}

window.onload = function () {
 const a = document.body.style.paddingTop = getComputedStyle(searchWrapper).height;
  console.log(a);
};












// let art=[];



// axios.get('https://pixabay.com/api/?key=22652626-da7dc8e3a4ffdfdaea60a5cb5&q=dog&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=1')
//   .then(res => {
    
//     art = res.data.hits;
//     console.log(art);
//     gallery.innerHTML = photoCardsTemplates(art);

//   }).catch(error => console.log(error.message)) ;


  // async function fetchConnections() {
  //   const response = await axios.get('https://pixabay.com/api/?key=22652626-da7dc8e3a4ffdfdaea60a5cb5&q=dog&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=1');
  //   console.log(response.data.hits);
  //   return response.data.hits;

  // }
  // let art = fetchConnections();
  // console.log(art);
  // gallery.innerHTML = photoCardsTemplates(art);




//   3)
// const b = 'dog';
//   const a = fetchConnections ();

//   console.log(a);


//   axios.defaults.baseURL = 'https://pixabay.com/api/?';


// // const fetchConnections = async () => 
//  async function fetchConnections () {
//     const key = 22652626-da7dc8e3a4ffdfdaea60a5cb5;
//     const image_type = photo;
//     const orientation = horizontal;
//     const safesearch = true;
//     const query = 'dog';
//     const page = 1;
//     const imagesPerPage = 40;
//   const response = await axios.get(`key=${key}&q=${query}&image_type=${image_type}&orientation=${orientation}&safesearch=${safesearch}&per_page=${imagesPerPage}&page=${page}`);
//   return response.data;
// };


// (query, page, imagesPerPage)

// axios.get(`key=${key}&q=${query}&image_type=${image_type}&orientation=${orientation}&safesearch=${safesearch}&per_page=${imagesPerPage}&page=${page}`);




 



  
