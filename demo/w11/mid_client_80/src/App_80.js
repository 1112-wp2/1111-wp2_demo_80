import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';


import MenuStaticPage_80 from './pages/mid_80/MenuStaticPage_80';

import MenuLocalJsonPage_80 from './pages/mid_80/MenuLocalJsonPage_80';

import MenuNodeServerPage_80 from './pages/mid_80/MenuNodeServerPage_80';

import MenuNodeServerContextPage_80 from './pages/mid_80/MenuNodeServerContextPage_80';

import Navbar from './components/NavbarMegaResp2_80';

function App_80() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/mid_static_80' element={<MenuStaticPage_80/>} />
        <Route path='/mid_localjson_80' element={<MenuLocalJsonPage_80/>} />
        <Route path='/mid_node_80' element={<MenuNodeServerPage_80/>} />
        <Route path='/mid_node_context_80' element={<MenuNodeServerContextPage_80/>} />
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App_80;
