import React, { useState, useRef, useEffect } from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import logoPics from "./images/LogoHome.svg";
import { IoMenu, IoClose, IoMailSharp, IoCartOutline, IoChevronForward } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { useContext } from "react";
import { ProductContext } from "../Contexts/ProductContext";

function Navigation1() {
  const contextData = useContext(ProductContext);
  const { cart } = contextData;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "unset";
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
      document.body.style.overflow = "unset";
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  
  return (
    <div>
      <header>
        <div className="header1">
          <div className="nav1-flex1">
            <Link to="/" className="logo-home">
              <img src={logoPics} alt="logo" />
            </Link>
            <div>
              {isMenuOpen ? (
                <IoClose
                  className={`nav1-icon ${isMenuOpen ? "menu-open" : ""}`}
                  onClick={toggleMenu}
                />
              ) : (
                <IoMenu
                  className={`nav1-icon ${isMenuOpen ? "menu-open" : ""}`}
                  onClick={toggleMenu}
                />
              )}
              <span>Menu</span>
            </div>
            <div className="search-input">
              <input type="text" placeholder="What can we help you find today?" />
              <FiSearch className="search-icon" />
            </div>
          </div>
          <div className="nav1-flex2">
            <div>
              <IoMailSharp className="nav1-icon" />
              <span>Hato Rey</span>
            </div>
            <div>
              <Link to="/cart">
                <IoCartOutline className="nav1-icon" />
                <span>Cart</span>
                {cart.length > 0 && <span className="itemInCart">{cart.length}</span>}
              </Link>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="mega-menu" onMouseLeave={toggleMenu} ref={menuRef}>
            <div className="mega-menu-column">
              <div className="mega-menu-section">
                <ul>
                  <div>
                    <li>
                      <button>
                        Deals
                        <span><IoChevronForward /></span>
                      </button>
                    </li>
                    <li>
                      <button>
                        Support & services
                        <span><IoChevronForward /></span>
                      </button>
                    </li>
                    <li>
                      <button>
                        Brand
                        <span><IoChevronForward /></span>
                      </button>
                    </li>
                    <li>
                      <button>
                        Featured
                        <span><IoChevronForward /></span>
                      </button>
                    </li>
                  </div>
                  <li className="separateThis"></li>
                  <h2>Shop by Department</h2>
                  <li>
                    <button>
                      Appliances
                      <span><IoChevronForward /></span>
                    </button>
                  </li>
                  <li>
                    <button>
                      TV &amp; Home Theater
                      <span><IoChevronForward /></span>
                    </button>
                  </li>
                  <li>
                    <button>
                      Computers &amp; Tablets
                      <span><IoChevronForward /></span>
                    </button>
                  </li>
                  <li>
                    <button>
                      Cell Phones
                      <span><IoChevronForward /></span>
                    </button>
                  </li>
                  <li>
                    <button>
                      Audio
                      <span><IoChevronForward /></span>
                    </button>
                  </li>
                  <li>
                    <button>
                      Video Games
                      <span><IoChevronForward /></span>
                    </button>
                  </li>
                  <li>
                    <button>
                      Cameras, Camcorders &amp; Drones
                      <span><IoChevronForward /></span>
                    </button>
                  </li>
                  <li>
                    <button>
                      Home, Furniture &amp; Office
                      <span><IoChevronForward /></span>
                    </button>
                  </li>
                  <li>
                    <button>
                      Smart Home, Security &amp; Wi-Fi
                      <span><IoChevronForward /></span>
                    </button>
                  </li>
                  <li>
                    <button>
                      Car Electronics &amp; GPS
                      <span><IoChevronForward /></span>
                    </button>
                  </li>
                  <li>
                    <button>
                      Movies &amp; Music
                      <span><IoChevronForward /></span>
                    </button>
                  </li>
                  <li>
                    <button>
                      Wearable Technology
                      <span><IoChevronForward /></span>
                    </button>
                  </li>
                  <li>
                    <button>
                      Health, Wellness &amp; Fitness
                      <span><IoChevronForward /></span>
                    </button>
                  </li>
                  <li>
                    <button>
                      Outdoor Living
                      <span><IoChevronForward /></span>
                    </button>
                  </li>
                  <li>
                    <button>
                      Toys, Games &amp; Collectibles
                      <span><IoChevronForward /></span>
                    </button>
                  </li>
                  <li>
                    <button>
                      Electric Transportation
                      <span><IoChevronForward /></span>
                    </button>
                  </li>
                  <li>
                    <button>
                      Sustainable Living
                      <span><IoChevronForward /></span>
                    </button>
                  </li>
                  <li>
                    <button className="menuCloseBtn" onClick={toggleMenu}>
                      <IoClose />
                      <span>Close</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </header>









    </div>
  );
}

export default Navigation1;
