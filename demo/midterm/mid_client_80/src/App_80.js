import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import HomePage_xx from './pages/HomePage_xx';
import BlogsStaticPage_xx from './pages/BlogsStaticPage_xx';
import BlogsLocalJsonPage_xx from './pages/BlogsLocalJsonPage_xx';
import BlogsNodeServerPage_xx from './pages/BlogsNodeServerPage_xx';
import BlogsSupabasePage_xx from './pages/BlogsSupabasePage_xx';

import ProductsStaticPage_xx from './pages/midprep_xx/ProductsStaticPage_xx';

import ProductsNodeServerPage_xx from './pages/midprep_xx/ProductsNodeServerPage_xx';

import ProductsNodeServerContextPage_xx from './pages/midprep_xx/ProductsNodeServerContextPage_xx';

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
        <Route path='/card_xx' element={<BlogsStaticPage_xx />} />
        <Route path='/local_xx' element={<BlogsLocalJsonPage_xx />} />
        <Route path='/node_xx' element={<BlogsNodeServerPage_xx />} />
        <Route path='/supabase_xx' element={<BlogsSupabasePage_xx />} />
        <Route path='/midp_static_xx' element={<ProductsStaticPage_xx />} />
        <Route path='/midp_node_xx' element={<ProductsNodeServerPage_xx />} />
        <Route
          path='/midp_node_context_xx'
          element={<ProductsNodeServerContextPage_xx />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App_80;
