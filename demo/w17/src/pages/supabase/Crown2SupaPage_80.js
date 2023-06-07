import { useState, useEffect } from 'react';
import Wrapper from '../../assets/wrapper/Crown_80';
const Crown2SupaPage_80 = () => {
    const [category, setCategory] = useState([]);

    const getCategoryData_80 = async() => {
        const response = await fetch(`https://wjviuyuwtkixlajqlpbk.supabase.co/rest/v1/category2_xx?select=*`,{
          method: 'GET',
          headers: {
            apikey: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indqdml1eXV3dGtpeGxhanFscGJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0NTkzMDcsImV4cCI6MTk5MjAzNTMwN30.pIV8FF8Cr3kMLUwG_3KKUZ1wsGipa9oXpwrXCR7Atas`,
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indqdml1eXV3dGtpeGxhanFscGJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0NTkzMDcsImV4cCI6MTk5MjAzNTMwN30.pIV8FF8Cr3kMLUwG_3KKUZ1wsGipa9oXpwrXCR7Atas`
          }
        } );
        const data = await response.json();
        console.log('category data', data);
        setCategory(data);
    }
  
    useEffect(()=> {
        getCategoryData_80();
    }, []);

    return(
        <Wrapper>
            <div className="header">
      <a href="/" className="logo-container">
        <img src="./assets/crown.svg" />
      </a>
      <div className="options">
        <a href="./overview.html" className="option">Shop</a>
        <a href="/shop" className="option">Contact</a>
        <a href="/signin" className="option">Sign In</a>
        <div className="cart-icon" onclick="cartToggle()">
          <img className="shopping-icon" src="./assets/shopping-bag.svg" alt="" />
        </div>
        <div className="cart-dropdown">
          <div className="cart-items">
            <div className="cart-item">
              <img src="https://i.ibb.co/QdJwgmp/brown-cowboy.png" alt="item" />
              <div className="item-details">
                <span className="name">Brown Cowboy</span>
                <span className="price">4 * $35</span>
              </div>
            </div>
            <div className="cart-item">
              <img
                src="https://i.ibb.co/mJS6vz0/blue-jean-jacket.png"
                alt="item"
              />
              <div className="item-details">
                <span className="name">Blue Jean Jacket</span>
                <span className="price">1 * $90</span>
              </div>
            </div>
          </div>
          <button className="custom-button">GO TO CHECKOUT</button>
        </div>
      </div>
    </div>
    <div className="homepage">
        <h4 className='title'>Crown2 -- Supabase (208410380)</h4>
      <div className="directory-menu">
            {category.map((item) => {
                const{id, remote_url, name, size} = item;
                return (
            <div className="menu-item" key={id}>
          <img
            className="background-image"
            src={remote_url}
            alt=""
          />
          <a href="./jackets.html" className="content">
            <h1 className="title">{name}</h1>
            <span className="subtitle">SHOP NOW</span>
          </a>
        </div>
                )
            })}
        </div>
      </div>
        </Wrapper>
    )
}

export default Crown2SupaPage_80;