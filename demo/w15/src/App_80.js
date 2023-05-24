import { BrowserRouter, Routes, Route} from 'react-router-dom';

import MenuStaticPage_80 from './pages/local/MenuStaticPage_80';
import SupaMenuPage_80 from './pages/supabase/SupaMenuPage_80';
import HomePage_80 from './pages/HomePage_80';
import MenuByCategoryPage_80 from './pages/supabase/MenuByCategoryPage_80';
import MenuNodePage_80 from './pages/node/MenuNodePage_80';
import MenuLocalJsonPage_80 from './pages/local/MenuLocalJsonPage_80';

const App_80 = () => {
  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<HomePage_80/>}/>
  <Route path='/static_80' element={<MenuStaticPage_80/>}/>
  <Route path='/supa_menu_80' element={<SupaMenuPage_80/>}/>
  <Route path='/supa_menu_80/:category' element={<MenuByCategoryPage_80/>}/>
  <Route path='/node_menu_80/' element={<MenuNodePage_80/>}/>
  <Route path='/local_menu_80/' element={<MenuLocalJsonPage_80/>}/>
</Routes>
</BrowserRouter>
  )
}

export default App_80;
