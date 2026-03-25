//App.jsx

import { Routes, Route } from 'react-router-dom';
import { useEffect,useState } from 'react';
import Dashboard from './Dashboard/Dashboard';
import Reviews from './Reviews/Reviews';
import Review from './Review/Review';
import Header from './Header/Header';
import AboutUs from './AboutUs/AboutUs';
import AboutMe from './AboutMe/AboutMe';
// Importa nuevos componentes
import Contact from './AboutMe/Contact';
import Hobbies from './AboutMe/Hobbies';
import MyStory from './AboutMe/MyStory'; 
import SiteHistory from './AboutUs/SiteHistory';
import SiteMission from './AboutUs/SiteMission';
import PageNotFound from './PageNotFound/PageNotFound';
import './App.css';

function App() {
  // Agrega las rutas hijo a la ruta /about-me.
const [reviews,setReviews] = useState([]);
useEffect(()=>{
  fetch('https://emoji-critic.es.tripleten-services.com/v1/reviews')
  .then((res)=> res.json()).then((data)=>{
    setReviews(data);
  }).catch((err)=>{
    console.error(err);
  })
},[]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
  <Route path="/" element={<Dashboard />} />
    <Route path="/reviews" element={<Reviews reviews={reviews} />} />
  <Route
    path="/reviews/:reviewId"
    element={<Review reviews={reviews} />}
  />
        <Route path="/about-me" element={<AboutMe />}>
          <Route path="contact" element={<Contact />} />
          <Route path="hobbies" element={<Hobbies />} />
          <Route path="my-story" element={<MyStory />} />
        </Route>
        <Route path="/about-us" element={<AboutUs />}>
          <Route path="site-history" element={<SiteHistory />} />
          <Route path="site-mission" element={<SiteMission />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;