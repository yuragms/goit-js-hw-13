import './sass/main.scss';
import axios from "axios";
import photoCardsTemplates from './templates/photoCards.hbs';

const gallery = document.querySelector('.gallery');

let art;



axios.get('https://pixabay.com/api/?key=22652626-da7dc8e3a4ffdfdaea60a5cb5&q=cat&image_type=photo&orientation=horizontal&safesearch=true')
  .then(res => {
    
    art = res.data.hits;
    console.log(art);
  });
  gallery.innerHTML = photoCardsTemplates(art);