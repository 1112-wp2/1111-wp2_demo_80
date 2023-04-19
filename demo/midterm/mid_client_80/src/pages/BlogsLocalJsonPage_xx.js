import { useState } from 'react';

import Wrapper from '../assets/wrapper/Blogs_xx'

import blogsData from '../data/blogData2_xx';

const BlogsLocalJsonPage_xx = () => {
  const [name, setName] = useState('Hsingtai Chung');
  const [id, setId] = useState('123456789');

  const [data, setData] = useState(blogsData);
  console.log('blog data', data);
  return (
    <Wrapper>
     <section className="blogs">
      <div className="section-title">
        <h2>Fetch Blogs From Local Json Data</h2>
        <h3>{name} {id}</h3>
      </div>
      <div className="blogs-center2">
        {data.map((item) => {
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

export default BlogsLocalJsonPage_xx;

