import { useState, useEffect } from 'react';

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

  const changeFilter = (filter) => {
    if(filter === 'all'){
      url = `${base_url}`;
    } else {
      url = `${base_url}&category=eq.${filter}`;
    }
    getMenuData_80(filter);
  }

  const getMenuData_80 = async(filter = 'all') => {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(`${filter} data`, data);
      setProducts(data);
  }

  useEffect(()=> {
    getMenuDataByCategory_80();
  }, []);
  return (
    <section className="menu">
          <div className="title">
          <h2>Menu from Supabase menu table</h2>
          <h3>PoCheng Chu, 208410380</h3>
            <div className="underline"></div>
          </div>
          <div className="btn-container">
            <button type="button" className="filter-btn" data-id="all" onClick={()=> changeFilter()}>
              all
            </button>
            <button type="button" className="filter-btn" data-id="breakfast" onClick={()=>  changeFilter('breakfast')}>
              breakfast
              </button>
              <button type="button" className="filter-btn" data-id="lunch"  onClick={()=> changeFilter('lunch')}>
              lunch
              </button>
              <button type="button" className="filter-btn" data-id="dessert"  onClick={()=> changeFilter('dessert')}>
              dessert
              </button>
              <button type="button" className="filter-btn" data-id="shakes"  onClick={()=> changeFilter('shakes')}>
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
