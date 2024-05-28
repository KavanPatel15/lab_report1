import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';

const App = () => {
  const [visits, setVisits] = useState(0);

  return (
    <>
      <nav>
        <div id='nav'>
          <Link to="/">Home </Link>
          <Link to="About"> About </Link>
          <Link to="Contact"> Contact</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home visits={visits} setVisits={setVisits} />} />
        <Route path="about" element={<About visits={visits} />} />
        <Route path="contact" element={<Contact visits={visits} />} />
      </Routes>
    </>
  );
}
export default App;