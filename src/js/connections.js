// import axios from 'axios';

// axios.defaults.baseURL = 'https://pixabay.com/api/?';


// // const fetchConnections = async () => 
// export async function fetchConnections () {
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


// // (query, page, imagesPerPage)

// // axios.get(`key=${key}&q=${query}&image_type=${image_type}&orientation=${orientation}&safesearch=${safesearch}&per_page=${imagesPerPage}&page=${page}`);


import axios from 'axios';

const baseURL = 'https://pixabay.com/api/';

export const fetchImages = ({ query, page, imagesPerPage }) => {
  const params = {
    key: '22652626-da7dc8e3a4ffdfdaea60a5cb5',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: imagesPerPage,
    page,
  };
  return axios(baseURL, { params });
};
