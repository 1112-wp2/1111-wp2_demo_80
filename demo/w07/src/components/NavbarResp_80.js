import React from 'react'
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrapper/NavbarResp_80';

const NavbarResp_80 = () => {
  return (
    <Wrapper>
    <header className="header">
      <div className="header-row container" role="navigation" aria-label="Main">
        <div className="header-left">
          <div className="logo">
            <h1>logo</h1>
          </div>
        </div>
        <div className="header-right">
          <ul className="main-menu">
            <li className="menu-item"><Link to="#" class="active">Home</Link></li>

            <li className="menu-item dropdown">
              <Link to="#">BLOGS DEMO +</Link>
              <div className="sub-menu-wrapper slideInUp">
                <ul className="sub-menu">
                  <li className="menu-item"><Link to="/card_80">Static</Link></li>
                  <li className="menu-item"><Link to="/card2_local_80">Local Json</Link></li>
                  <li className="menu-item"><Link to="/supabase_80">Supabase</Link></li>
                  <li className="menu-item"><Link to="/card2_node_80">Node</Link></li>
                </ul>
              </div>
            </li>
            <li className="menu-item"><Link to="#">Blog</Link></li>
            <li className="menu-item"><Link to="#">Contact</Link></li>
          </ul>
          <Link
            to="#"
            id="hamburger-icon"
            className="mobile-toggler"
            aria-label="Mobile Menu"
            ><i className="fas fa-bars"></i
          ></Link>
        </div>
      </div>
    </header>
    </Wrapper>
  )
}


export default NavbarResp_80;