import React from "react";
import Link from "next/link";
const NavBar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="" id="">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link">home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about">
                  <a className="nav-link">about</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/lists/mylists">
                  <a className="nav-link">mylist</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
