import { BrowserRouter, Routers, Route, Routes } from 'react-router-dom';

import BlogsStaticPage_80 from './pages/BlogsStaticPage_80';
import HomePage_80 from './pages/HomePage_80';
import BlogLocalJsonPage_80 from './pages/BlogLocalJsonPage_80';
import BlogNodeServerPage_80 from './pages/BlogNodeServerPage_80';
import BlogSupabasePage_80 from './pages/BlogSupabasePage_80';
import Navbar from './components/NavbarResp_80';

function App_80() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/card_80' element={<BlogsStaticPage_80 />} />
        <Route path='/card2_local_80' element={<BlogLocalJsonPage_80 />} />
        <Route path='/card2_node_80' element={<BlogNodeServerPage_80 />} />
        <Route path='/supabase_80' element={<BlogSupabasePage_80 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App_80;
