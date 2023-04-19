import { useState, useEffect } from 'react';

// import axios from 'axios';

import Wrapper from '../../assets/wrapper/midprep_xx/Products_scss_xx';

import { useDemoContext_80} from '../../context/DemoContext_80';

// import Wrapper from '../../assets/wrapper/midprep_xx/Products_css_xx';

// import blogsData from '../data/blogData2_xx';

// let api_url = `http://localhost:5000/api/midprep_xx/overview2_xx`;

// let api_url = `https://one112-server-card-demo-xx.onrender.com/api/card2_xx`;

const ProductsNodeServerContextPage_xx = () => {
  const { pName, pId, data1, data2 } = useDemoContext_80();
  // const [name, setName] = useState('Hsingtai Chung');
  // const [id, setId] = useState('123456789');

  // const [data1, setData1] = useState([]);

  // const [data2, setData2] = useState([]);

  //  console.log('blog data', data);

  // const fetchBlogDataFromNodeServer = async () => {
  //   try {
  //     const results = await axios.get(api_url);
  //     console.log('results', results.data);
  //     setData1(results.data.data1);
  //     setData2(results.data.data2);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchBlogDataFromNodeServer();
  // }, []);

  return (
    <Wrapper>
      <div className='shop-page'>
        <div className='section-title'>
          <h2>Fetch Products From Node Server Using Context</h2>
          <h3>
            {pName} {pId}
          </h3>
        </div>
        <div className='collection-overview'>
          <div className='collection-preview'>
            <h2 className='title'>Womens</h2>
            <div className='preview'>
              {data1.map((item) => {
                const { pId, pname, price, img_url } = item;
                return (
                  <div className='collection-item' key={pId}>
                    <img className='image' src={img_url} />
                    <div className='collection-footer'>
                      <span className='name'>{pname}</span>
                      <span className='price'>{price}</span>
                    </div>
                    <button className='custom-button'>Add to Cart</button>
                  </div>
                );
              })}
            </div>
          </div>
          <div className='collection-preview'>
            <h2 className='title'>Hats</h2>
            <div className='preview'>
              {data2.map((item) => {
                const { pId, pname, price, img_url } = item;
                return (
                  <div className='collection-item' key={pId}>
                    <img className='image' src={img_url} />
                    <div className='collection-footer'>
                      <span className='name'>{pname}</span>
                      <span className='price'>{price}</span>
                    </div>
                    <button className='custom-button'>Add to Cart</button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductsNodeServerContextPage_xx;
