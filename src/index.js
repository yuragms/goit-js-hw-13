import './sass/main.scss';
import { fetchImages } from './js/connections';

import photoCardsTemplates from './templates/photoCards.hbs';

const gallery = document.querySelector('.gallery');



let page = 1;
const imagesPerPage = 40;
let query = 'dog';

const images = fetchImages({ query, page, imagesPerPage });

gallery.innerHTML = photoCardsTemplates(images.data.hits);

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




 



  
