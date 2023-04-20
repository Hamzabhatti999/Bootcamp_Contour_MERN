
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './component/home';
import Navbar from './component/Navbar';
import Career from './component/career';
import Contact from './component/contact';
import About from './component/about';
function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/career' element={<Career />} />
          <Route path='/aboutus' element={<About />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
