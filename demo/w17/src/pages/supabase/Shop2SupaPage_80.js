import { useState, useEffect } from 'react';
import Wrapper from '../../assets/wrapper/Crown_80';
const Shop2SupaPage_80 = () => {
    const [shop, setShop] = useState([]);

    const getShopData_80 = async() => {
        const response = await fetch(`https://wjviuyuwtkixlajqlpbk.supabase.co/rest/v1/category2_xx?select=*`,{
          method: 'GET',
          headers: {
            apikey: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indqdml1eXV3dGtpeGxhanFscGJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0NTkzMDcsImV4cCI6MTk5MjAzNTMwN30.pIV8FF8Cr3kMLUwG_3KKUZ1wsGipa9oXpwrXCR7Atas`,
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indqdml1eXV3dGtpeGxhanFscGJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0NTkzMDcsImV4cCI6MTk5MjAzNTMwN30.pIV8FF8Cr3kMLUwG_3KKUZ1wsGipa9oXpwrXCR7Atas`
          }
        } );
        const data = await response.json();
        console.log('category data', data);
        setShop(data);
    }
  
    useEffect(()=> {
        getShopData_80();
    }, []);

    return (
        <Wrapper>
            <div className="header">
    <a href="/" className="logo-container">
      <img src='./assets/crown.svg' />
    </a>
    <div className="options">
      <a href="/shop" className="option">Shop</a>
      <a href="/shop" className="option">Contact</a>
      <a href="/signin" className="option">Sign In</a>
      <div className="cart-icon" onclick="cartToggle()">
        <img className="shopping-icon" src="./assets/shopping-bag.svg" alt=""/>
      </div>
      <div className="cart-dropdown">
        <div className="cart-items">
          <div className="cart-item">
             <img src="https://i.ibb.co/QdJwgmp/brown-cowboy.png" alt="item"/>
             <div className="item-details">
               <span className="name">Brown Cowboy</span>
               <span className="price">4 * $35</span>
             </div>
          </div>
          <div className="cart-item">
            <img src="https://i.ibb.co/mJS6vz0/blue-jean-jacket.png" alt="item"/>
            <div className="item-details">
              <span className="name">Blue Jean Jacket</span>
              <span className="price">1 * $90</span>
          </div>
        </div>
        <button className="custom-button">GO TO CHECKOUT</button>
      </div>
    </div>
    </div>
  </div>
        <div class="shop-page">
    <div class="collection-overview">
      <div class="collection-preview">
        <h2 class="title">Hats</h2>
        <div class="preview">
        {shop.map((item) => {
    const{id, name, cat_id, price, remote_url} = item;
    return (
<div class="collection-item" key={id}>
            <img class="image" src={remote_url} />
            <div class="collection-footer">
              <span class="name">{name}</span>
              <span class="price">{price}</span>
            </div>
            <button class="custom-button">Add to Cart</button>
          </div>
    )
})}
        </div>
      </div>
      <div class="collection-preview">
        <h1 class="title">Jackets</h1>  
        <div class="preview">
          <div class="collection-item">
            <img class="image" src="https://i.ibb.co/XzcwL5s/black-shearling.png" />
            <div class="collection-footer">
              <span class="name">Black Jean Shearling</span>
              <span class="price">125</span>
            </div>
            <button class="custom-button">Add to Cart</button>
          </div>
          <div class="collection-item">
           <img class="image" src="https://i.ibb.co/mJS6vz0/blue-jean-jacket.png" />
           <div class="collection-footer">
             <span class="name">Blue Jean Jacket</span>
             <span class="price">90</span>
           </div>
           <button class="custom-button">Add to Card</button>
         </div>
         <div class="collection-item">
           <img class="image" src="https://i.ibb.co/N71k1ML/grey-jean-jacket.png" />
           <div class="collection-footer">
             <span class="name">Grey Jean Jacket</span>
             <span class="price">90</span>
           </div>
           <button class="custom-button">Add to Cart</button>
         </div>
         <div class="collection-item">
           <img class="image" src="https://i.ibb.co/s96FpdP/brown-shearling.png" />
           <div class="collection-footer">
             <span class="name">Brown Shearling</span>
             <span class="price">165</span>
           </div>
           <button class="custom-button">Add to Cart</button>
         </div>
        </div>
      </div>
      <div class="collection-preview">
        <h2 class="title">Sneakers</h2>  
        <div class="preview">
          <div class="collection-item">
            <img class="image" src="https://i.ibb.co/0s3pdnc/adidas-nmd.png" />
            <div class="collection-footer">
              <span class="name">Adidas NMD</span>
              <span class="price">220</span>
            </div>
            <button class="custom-button">Add to Cart</button>
          </div>
          <div class="collection-item">
           <img class="image" src="https://i.ibb.co/dJbG1cT/yeezy.png" />
           <div class="collection-footer">
             <span class="name">Adidas Yeezy</span>
             <span class="price">280</span>
           </div>
           <button class="custom-button">Add to Card</button>
         </div>
         <div class="collection-item">
           <img class="image" src="https://i.ibb.co/bPmVXyP/black-converse.png" />
           <div class="collection-footer">
             <span class="name">Black Converse</span>
             <span class="price">110</span>
           </div>
           <button class="custom-button">Add to Cart</button>
         </div>
         <div class="collection-item">
           <img class="image" src="https://i.ibb.co/1RcFPk0/white-nike-high-tops.png" />
           <div class="collection-footer">
             <span class="name">Nike White AirForce</span>
             <span class="price">160</span>
           </div>
           <button class="custom-button">Add to Cart</button>
         </div>
        </div>
      </div>
      <div class="collection-preview">
        <h2 class="title">Womens</h2>  
        <div class="preview">
          <div class="collection-item">
            <img class="image" src="https://i.ibb.co/7CQVJNm/blue-tank.png" />
            <div class="collection-footer">
              <span class="name">Blue Tanktop</span>
              <span class="price">25</span>
            </div>
            <button class="custom-button">Add to Cart</button>
          </div>
          <div class="collection-item">
           <img class="image" src="https://i.ibb.co/4W2DGKm/floral-blouse.png" />
           <div class="collection-footer">
             <span class="name">Floral Blouse</span>
             <span class="price">20</span>
           </div>
           <button class="custom-button">Add to Card</button>
         </div>
         <div class="collection-item">
           <img class="image" src="https://i.ibb.co/KV18Ysr/floral-skirt.png" />
           <div class="collection-footer">
             <span class="name">Floral Dress</span>
             <span class="price">80</span>
           </div>
           <button class="custom-button">Add to Cart</button>
         </div>
         <div class="collection-item">
           <img class="image" src="https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png" />
           <div class="collection-footer">
             <span class="name">Red Dots Dress</span>
             <span class="price">80</span>
           </div>
           <button class="custom-button">Add to Cart</button>
         </div>
        </div>
      </div>
      <div class="collection-preview">
        <h2 class="title">Mens</h2>  
        <div class="preview">
          <div class="collection-item">
            <img class="image" src="https://i.ibb.co/xJS0T3Y/camo-vest.png" />
            <div class="collection-footer">
              <span class="name">Camo Down Vest</span>
              <span class="price">325</span>
            </div>
            <button class="custom-button">Add to Cart</button>
          </div>
          <div class="collection-item">
           <img class="image" src="https://i.ibb.co/qMQ75QZ/floral-shirt.png" />
           <div class="collection-footer">
             <span class="name">Floral T-shirt</span>
             <span class="price">20</span>
           </div>
           <button class="custom-button">Add to Card</button>
         </div>
         <div class="collection-item">
           <img class="image" src="https://i.ibb.co/55z32tw/long-sleeve.png" />
           <div class="collection-footer">
             <span class="name">Black & White Longsleeve</span>
             <span class="price">25</span>
           </div>
           <button class="custom-button">Add to Cart</button>
         </div>
         <div class="collection-item">
           <img class="image" src="https://i.ibb.co/RvwnBL8/pink-shirt.png" />
           <div class="collection-footer">
             <span class="name">Pink T-shirt </span>
             <span class="price">25</span>
           </div>
           <button class="custom-button">Add to Cart</button>
         </div>
        </div>
      </div>
    </div>
  </div>
        </Wrapper>
    )
}


export default Shop2SupaPage_80;