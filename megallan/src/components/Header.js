import React from 'react';

const Header = () => {

  return (
    <div>
      <nav className="site-mobile-menu">
         <div className="close-wrap d-flex">
            <a href="#" className="d-flex ml-auto js-menu-toggle">
               <span className="close-label">Close</span>
               <div className="close-times">
                  <span className="bar1"></span>
                  <span className="bar2"></span>
               </div>
            </a>
         </div>
         <div className="site-mobile-inner"></div>
      </nav>
    </div>
  );

}

export default Header;
