import PrimeVideo from './components/PrimeVideo'

import './App.css'

const moviesList = [
  {
    id: 1,
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/the-tomorrow-war-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=QPistcpGB8o',
    categoryId: 'ACTION',
  },
  {
    id: 2,
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/the-boss-baby-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=k397HRbTtWI&t=1s',
    categoryId: 'COMEDY',
  },
  {
    id: 3,
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/avengers-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=eOrNdBpGMv8',
    categoryId: 'ACTION',
  },
  {
    id:4,
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/the-intern-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=ZU3Xban0Y6A',
    categoryId: 'COMEDY',
  },
  {
    id: 5,
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/karwaan-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=IUCeN7kelXs',
    categoryId: 'COMEDY',
  },
  {
    id: 6,
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/war-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=tQ0mzXRk-oM',
    categoryId: 'ACTION',
  },
  {
    id: 7,
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/yes-man-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=dDh1l3qVNoY',
    categoryId: 'COMEDY',
  },
  {
    id: 8,
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/isnt-it-romantic-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=YVYzxm_RqMg&t=9s',
    categoryId: 'COMEDY',
  },
  {
    id:9,
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/total-dhamaal-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=fo9EhcwQXcM',
    categoryId: 'COMEDY',
  },
  {
    id: 10,
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/godzilla-vs-kong-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=odM92ap8_c0',
    categoryId: 'ACTION',
  },
  {
    id: 11,
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/welcome-to-newyork-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=lMAj8tyThw0',
    categoryId: 'COMEDY',
  },
  {
    id: 12,
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/pagalpanti-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=3-7jehmURuM',
    categoryId: 'COMEDY',
  },
  {
    id: 13,
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/gamer-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=P2g94xQmtHw',
    categoryId: 'ACTION',
  },
  {
    id: 14,
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/rule-of-the-law-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=xaPLUII_M6g',
    categoryId: 'ACTION',
  },
  {
    id: 15,
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/priest-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=IYfdQOGqL1o',
    categoryId: 'ACTION',
  },
  {
    id: 16,
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/ghost-protocal-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=EDGYVFZxsXQ',
    categoryId: 'ACTION',
  },
  {
    id: 17,
    thumbnailUrl:'https://th.bing.com/th/id/OIP.h_V5Vi4-hQOVjKbNsQGDIwHaLH?rs=1&pid=ImgDetMain',
    videoUrl: 'https://www.youtube.com/watch?v=aaKOy1tilM',
    categoryId: 'ACTION',
  },
  {
    id: 17,
    thumbnailUrl:'https://th.bing.com/th/id/OIP.h_V5Vi4-hQOVjKbNsQGDIwHaLH?rs=1&pid=ImgDetMain',
    videoUrl: 'https://www.youtube.com/watch?v=aaKOy1tilM',
    categoryId: 'COMEDY',
  },
  
]
const App = () => <PrimeVideo moviesList={moviesList} />

export default App
