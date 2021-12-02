import React from 'react'
import {Link} from 'react-router-dom';
export const Header = () => {
    return (
          <header>
              <div className="container">
                  <div className="inner-content">
                      <div className="brand">
                          <Link to="/" className="header-text">WatchList</Link>
                      </div>

                      <ul className="nav-links">
                          <li>
                              <Link to="/" className="header-text">Watch List</Link>
                          </li>
                          <li>
                              <Link to="/watched" className="header-text">Watched</Link>
                          </li>
                          <li>
                              <Link to="/add" className="btn">+Add</Link>
                          </li>
                      </ul>
                  </div>
              </div>
          </header>
    )
}
