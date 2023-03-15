import { BrowserRouter, Routers, Route, Routes } from "react-router-dom";

import BlogsStaticPage_80 from "./pages/BlogsStaticPage_80";
import HomePage_80 from "./pages/HomePage_80";

function App_80() {
  return (
    <BrowserRouter>
    <Routes path="/" element={HomePage_80}>
      <Route path='card_80' element={<BlogsStaticPage_80/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App_80;
