import { useEffect, useState } from 'react';

// import axios from 'axios';
// import blogsData from '../data/blogData2_80';
// let api_url = `http://localhost:5000/api/card2_80`;
// let api_url = `https://one112-server-cs-info-lab-62wd.onrender.com/api/card2_80`;

import { supabase } from '../db/clientSupabase';

import Wrapper from '../assets/wrapper/Blogs_80';
const BlogSupabasePage_80 = () => {
  const [name, setName] = useState('Pocheng Chu');
  const [id, setId] = useState('208410380');

  const [data, setData] = useState([]);
  // console.log('blog data', data);

  const fetchBlogDataFromSupabase = async () => {
    try {
      let { data, error } = await supabase.from('card_80').select('*')

      console.log('data', data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogDataFromSupabase();
  }, []);


  return (
    <Wrapper>
      <section className='blogs'>
        <div className='section-title'>
          <h2>Fetch Blogs from Supabase</h2>
          <h3>
            {name} {id}
          </h3>
        </div>
        <div className='blogs-center2'>
          {data.map((item) => {
            const { id, img, remote_img, category, title, desc } = item;
            return (
              <article key={id} className='blog'>
                <img src={img} alt={title} className='img blog-img' />
                <div className='blog-content'>
                  <span>
                    {category} <i className='fa-solid fa-mug-saucer'></i>
                  </span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <a href='#'>read more</a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </Wrapper>
  );
};
export default BlogSupabasePage_80;
