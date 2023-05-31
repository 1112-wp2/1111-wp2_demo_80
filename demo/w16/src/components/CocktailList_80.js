import React from 'react';
import Cocktail_80 from './Cocktail_80';
import Loading from './Loading_80';
import { useGlobalContext } from '../context_80';

const CocktailList_80 = () => {
  const {loading, cocktails} = useGlobalContext();
  if (loading) {
    return <Loading />
  }
  if(cocktails.length < 1) {
    return(
      <h2 className='section-title'>
        no cocktails matched your search criteria
      </h2>
    )
  }
  return (
    <section className="section">
          <h2 className="section-title">cocktails</h2>
          <div className="cocktails-center">
            {cocktails.map((item)=>{
              return <Cocktail_80 key={item.id} {...item} />
            })}
          </div>
        </section>
  );
};

export default CocktailList_80;
