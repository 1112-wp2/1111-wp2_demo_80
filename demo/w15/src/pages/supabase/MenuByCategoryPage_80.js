import { useState, useEffect } from 'react';
import { useNavigate, useParams} from 'react-router-dom';
const base_url = `https://wjviuyuwtkixlajqlpbk.supabase.co/rest/v1/menu_80?select=*`;

let url = `${base_url}`

const options = {
  method: 'GET',
  headers: {
    apikey: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indqdml1eXV3dGtpeGxhanFscGJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0NTkzMDcsImV4cCI6MTk5MjAzNTMwN30.pIV8FF8Cr3kMLUwG_3KKUZ1wsGipa9oXpwrXCR7Atas`,
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indqdml1eXV3dGtpeGxhanFscGJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0NTkzMDcsImV4cCI6MTk5MjAzNTMwN30.pIV8FF8Cr3kMLUwG_3KKUZ1wsGipa9oXpwrXCR7Atas`
  }
}

const MenuByCategoryPage_80 = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('all');
  const params = useParams();
  console.log('params category', params.category);

  const navigate = useNavigate();

  const changeFilter = (category) => {
    console.log('category', category);
    setCategory(category);
  }

  const getMenuDataByCategory_80 = async() => {
    if(params.category === 'all'){
      url = `${base_url}`;
    } else {
      url = `${base_url}&category=eq.${params.category}`;
    }
    const response = await fetch(url, options);
      const data = await response.json();
      console.log('menu data', data);
      setProducts(data);
  }

  useEffect(()=> {
    getMenuDataByCategory_80();
  }, [category]);
  return (
    <section className="menu">
          <div className="title">
          <h2>Menu from Supabase menu table</h2>
          <h3>PoCheng Chu, 208410380</h3>
            <div className="underline"></div>
          </div>
          <div className="btn-container">
            <button type="button" className="filter-btn" data-id="all" onClick={()=> {changeFilter('all'); return navigate('/supa_menu_80/all');}}>
              all
            </button>
            <button type="button" className="filter-btn" data-id="breakfast" onClick={()=>  {changeFilter('breakfast'); return navigate('/supa_menu_80/breakfast');}}>
              breakfast
              </button>
              <button type="button" className="filter-btn" data-id="lunch"  onClick={()=> {changeFilter('lunch'); return navigate('/supa_menu_80/lunch');}}>
              lunch
              </button>
              <button type="button" className="filter-btn" data-id="dessert"  onClick={()=> {changeFilter('dessert'); return navigate('/supa_menu_80/dessert');}}>
              dessert
              </button>
              <button type="button" className="filter-btn" data-id="shakes"  onClick={()=> {changeFilter('shakes'); return navigate('/supa_menu_80/shakes');}}>
              shakes
            </button>
          </div>
          <div className="section-center">
            { products.map((product) => {
              const {id, img, price, title, description} = product;
              return (
              <article className="menu-item" key={id}>
              <img src={img} alt="eggs" className="photo" />
              <div className="item-info">
                <header>
                  <h4>{title}</h4>
                  <h4 className="price">{price}</h4>
                </header>
                <p className="item-text">
                  {description}
                </p>
              </div>
            </article>
              )
            })}
            </div>
        </section>
  );
}

export default MenuByCategoryPage_80;
