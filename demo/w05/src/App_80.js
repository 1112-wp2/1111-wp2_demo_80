import { BrowserRouter, Routers, Route, Routes } from "react-router-dom";

import BlogsStaticPage_80 from "./pages/BlogsStaticPage_80";
import HomePage_80 from "./pages/HomePage_80";
import BlogLocalJsonPage from "./pages/BlogLocalJsonPage";

function App_80() {
  return (
    <BrowserRouter>
    <Routes path="/" element={HomePage_80}>
      <Route path='card_80' element={<BlogsStaticPage_80/>}/>
      <Route path='card2_local_80' element={<BlogLocalJsonPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App_80;
