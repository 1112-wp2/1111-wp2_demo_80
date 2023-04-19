import { useState, useEffect } from 'react';

// import axios from 'axios';
// import blogsData from '../data/blogData2_xx';
// let api_url = `http://localhost:5000/api/card2_xx`;
// let api_url = `https://one112-server-card-demo-xx.onrender.com/api/card2_xx`;

// import { supabase } from '../db/clientSupabse';

import Wrapper from '../assets/wrapper/Blogs_xx'

import { useDemoContext_80 } from '../context/DemoContext_80'

const BlogsSupabasePage_xx = () => {
  // const [name, setName] = useState('Hsingtai Chung');
  // const [id, setId] = useState('123456789');

  // const [data, setData] = useState([]);
//  console.log('blog data', data);

  const { pName, pId, blogs } = useDemoContext_80();

  // const fetchBlogDataFromSupabase = async () => {
  //    try {
       
  //     let { data, error } = await supabase.from('card_xx').select('*')

  //      console.log('data', data);
  //      setData(data);
  //    } catch(error) {
  //       console.log(error);
  //    }
  // }

  // useEffect(()=>{
  //   fetchBlogDataFromSupabase();
  // }, []);


  return (
    <Wrapper>
     <section className="blogs">
      <div className="section-title">
        <h2>Fetch Blogs From Supabase</h2>
        <h3>{pName} {pId}</h3>
      </div>
      <div className="blogs-center2">
        {blogs.map((item) => {
           const {id, img, remote_img, category, title, desc} = item;
           return (
            <article key={id} className="blog">
            <img
              src={img}
              alt={title}
              className="img blog-img"
            />
            <div className="blog-content">
              <span>{category} <i className="fa-solid fa-globe"></i></span>
              <h3>{title}</h3>
              <p>{desc}</p>
              <a href="#">read more</a>
            </div>
          </article>
          )
        }) }
      </div>
    </section>
    </Wrapper>
  )
}

export default BlogsSupabasePage_xx;

