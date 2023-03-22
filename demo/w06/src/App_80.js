import { BrowserRouter, Routers, Route, Routes } from 'react-router-dom';

import BlogsStaticPage_80 from './pages/BlogsStaticPage_80';
import HomePage_80 from './pages/HomePage_80';
import BlogLocalJsonPage from './pages/BlogLocalJsonPage';
import BlogNodeServerPage from './pages/BlogNodeServerPage';

function App_80() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/card_80' element={<BlogsStaticPage_80 />} />
        <Route path='/card2_local_80' element={<BlogLocalJsonPage />} />
        <Route path='/card2_node_80' element={<BlogNodeServerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App_80;
