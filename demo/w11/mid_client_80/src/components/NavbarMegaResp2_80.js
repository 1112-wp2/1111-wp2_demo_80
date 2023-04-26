import React from 'react';
import { Link } from 'react-router-dom';

import Wrapper from '../assets/wrapper/NavbarMegaResp2_80';

const NavbarMegaResp2_80 = () => {
  return (
  <Wrapper>
    <header className="header">
      <div className="container">
        <div className="row v-center">
          <div className="header-item item-left">
            <div className="logo">
              <a href="#">MidExam</a>
            </div>
          </div>
          <div className="header-item item-center">
            <div className="menu-overlay"></div>
            <nav className="menu">
              <div className="mobile-menu-head">
                <div className="go-back"><i className="fa fa-angle-left"></i></div>
                <div className="current-menu-title"></div>
                <div className="mobile-menu-close">&times;</div>
              </div>
              <ul className="menu-main">
                <li>
                  <a href="#">Home</a>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">New <i className="fa fa-angle-down"></i></a>
                  <div className="sub-menu mega-menu mega-menu-column-4">
                    <div className="list-item text-center">
                      <a href="#">
                        <img src="img/p1.jpg" alt="new Product" />
                        <h4 className="title">Product 1</h4>
                      </a>
                    </div>
                    <div className="list-item text-center">
                      <a href="#">
                        <img src="img/p2.jpg" alt="new Product" />
                        <h4 className="title">Product 2</h4>
                      </a>
                    </div>
                    <div className="list-item text-center">
                      <a href="#">
                        <img src="img/p3.jpg" alt="new Product" />
                        <h4 className="title">Product 3</h4>
                      </a>
                    </div>
                    <div className="list-item text-center">
                      <a href="#">
                        <img src="img/p4.jpg" alt="new Product" />
                        <h4 className="title">Product 4</h4>
                      </a>
                    </div>
                  </div>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">Class Demo <i className="fa fa-angle-down"></i></a>
                  <div className="sub-menu mega-menu mega-menu-column-4">
                    <div className="list-item">
                      <h4 className="title">Week 1~6</h4>
                      <ul>
                        <li>
                          <a href="#">Calculator</a>
                        </li>
                        <li>
                          <a href="#">TicTacToe</a>
                        </li>
                        <li>
                          <a href="#">Review</a>
                        </li>
                        <li>
                          <a href="#">Menu-1</a>
                        </li>
                        <li>
                          <a href="#">Menu-2</a>
                        </li>
                        <li>
                          <a href="#">Modal</a>
                        </li>
                      </ul>
                    </div>
                    <div className="list-item">
                      <h4 className="title">Cards Demo</h4>
                      <ul>
                        <li>
                          <a href="#">Static </a>
                        </li>
                        <li>
                          <a href="#">Local Json</a>
                        </li>
                        <li>
                          <a href="#">Node Server</a>
                        </li>
                        <li>
                          <a href="#">Supabase</a>
                        </li>
                      </ul>
                      <h4 className="title">Midterm Exam (w9)</h4>
                      <ul>
                        <li><a href="#">Static</a></li>
                        <li><a href="#">Node Server</a></li>
                        <li><a href="#">Node Server Context</a></li>
                      </ul>
                    </div>
                    <div className="list-item">
                      <h4 className="title">Week 11~17</h4>
                      <ul>
                        <li><a href="#">(w11)</a></li>
                        <li><a href="#">(w12)</a></li>
                        <li><a href="#">(w13)</a></li>
                        <li><a href="#">(w14)</a></li>
                        <li><a href="#">(w15)</a></li>
                        <li><a href="#">(w16)</a></li>
                        <li><a href="#">(w17)</a></li>
                      </ul>
                    </div>
                    <div className="list-item">
                       <img src="img/shop1.jpg" alt="shop" />
                      <img src="./img/tku.jfif" alt="" />
                    </div>
                  </div>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">Midterm <i className="fas fa-angle-down"></i></a>
                  <div className="sub-menu single-column-menu">
                    <ul>
                      <li><Link to='mid_static_80'>Static</Link></li>
                      <li><Link to='mid_localjson_80'>Local Json</Link></li>
                      <li><Link to='mid_node_80'>Node Server</Link></li>
                      <li><Link to='mid_node_context_80'>Node + Context</Link></li>
                    </ul>
                  </div>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">Pages <i className="fas fa-angle-down"></i></a>
                  <div className="sub-menu single-column-menu">
                    <ul>
                      <li><a href="#">Login</a></li>
                      <li><a href="#">Register</a></li>
                      <li><a href="#">Faq</a></li>
                      <li><a href="#">404 Page</a></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-item item-right">
            <a
              href="https://github.com/htchung/1112-1N-js-demo-id"
              target="_blank"
              ><i className="fab fa-github"></i
            ></a>
            <a
              href="https://github.com/htchung/1112-1N-js-demo-id/commits/main"
              target="_blank"
              ><i className="fab fa-git-alt"></i
            ></a>
            <a href="#"><i className="fas fa-cog"></i></a>
            <div className="mobile-menu-trigger">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  </Wrapper>
  );
};

export default NavbarMegaResp2_80;
