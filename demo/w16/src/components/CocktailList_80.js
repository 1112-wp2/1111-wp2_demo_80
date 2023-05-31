import React from 'react';
import Cocktail from './Cocktail_80';
import Loading from './Loading_80';
import { useGlobalContext } from '../context_80';

const CocktailList_80 = () => {
  return (
    <section className="section">
          <h2 className="section-title">cocktails</h2>
          <div className="cocktails-center">
            <article className="cocktail">
              <div className="img-container">
                <img
                  src="https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg"
                  alt="A1"
                />
              </div>
              <div className="cocktail-footer">
                <h3>A1</h3>
                <h4>Cocktail glass</h4>
                <p>Alcoholic</p>
                <a className="btn btn-primary btn-details" href="/cocktail/17222"
                  >details
                  </a>
              </div>
            </article>
            <article className="cocktail">
              <div className="img-container">
                <img
                  src="https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg"
                  alt="ABC"
                />
              </div>
              <div className="cocktail-footer">
                <h3>ABC</h3>
                <h4>Shot glass</h4>
                <p>Alcoholic</p>
                <a className="btn btn-primary btn-details" href="/cocktail/13501"
                  >details</a >
              </div>
            </article>
            <article className="cocktail">
              <div className="img-container">
                <img
                  src="https://www.thecocktaildb.com/images/media/drink/l3cd7f1504818306.jpg"
                  alt="Ace"
                />
              </div>
              <div className="cocktail-footer">
                <h3>Ace</h3>
                <h4>Martini Glass</h4>
                <p>Alcoholic</p>
                <a className="btn btn-primary btn-details" href="/cocktail/17225"
                  >details</a >
              </div>
            </article>
          </div>
        </section>
  );
};

export default CocktailList_80;
