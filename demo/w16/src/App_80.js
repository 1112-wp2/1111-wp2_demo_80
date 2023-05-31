import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import pages
import Home_80 from './pages/Home_80';
import About_80 from './pages/About_80';
import SingleCocktail_80 from './pages/SingleCocktail_80';
import Error_80 from './pages/Error_80';
// import components
import Navbar_80 from './components/Navbar_80';
function App_80() {
  return (
    <Router>
      <Navbar_80/>
      <Routes>
        <Route path='/' element={<Home_80/>} />
        <Route path='/about' element={<About_80/>} />
        <Route path='/cocktail/:id' element={<SingleCocktail_80/>} />
        <Route path='*' element={<Error_80/>} />
      </Routes>
    </Router>
  );
}

export default App_80;
