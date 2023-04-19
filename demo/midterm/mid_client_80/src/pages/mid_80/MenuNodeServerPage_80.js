import { useState, useEffect } from 'react';
import axios from 'axios';  
import Wrapper from '../../assets/wrapper/mid_80/Menu_80';

let api_url = `http://localhost:5000/api/mid_80/menu_80`;
const MenuNodeServerPage_80 = () => {
  const [name, setName] = useState('Pocheng Chu');
  const [id, setId] = useState('208410380');
  const [data, setData] = useState([]);

  const fetchMenuDataFromNodeServer = async () => {
    try {
      const results = await axios.get(api_url);
      console.log('results', results);
      setData(results.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMenuDataFromNodeServer();
  }, []);

  return <Wrapper>
    <section className="menu">
          <div className="title">
            <h2>our menu - Node Server</h2>
            <h4>{name} {id}</h4>
            <div className="underline"></div>
          </div>
          <div className="btn-container">
            <button type="button" className="filter-btn" data-id="all">all</button>
            <button type="button" className="filter-btn" data-id="breakfast">
              breakfast
              </button>
              <button type="button" className="filter-btn" data-id="lunch">
              lunch
              </button>
              <button type="button" className="filter-btn" data-id="dessert">
              dessert
              </button>
              <button type="button" className="filter-btn" data-id="shakes">
              shakes
            </button>
          </div>
          <div className="section-center">
          {data.map((item) => {
            const {id, img, title, price, category, description } = item;
            return(
              <article key={id} className="menu-item">
              <img src={img} alt={category} className="photo" />
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
          })

          }
          </div>
        </section>
  </Wrapper>;
};

export default MenuNodeServerPage_80;
