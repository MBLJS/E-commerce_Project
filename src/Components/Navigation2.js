import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMenu, IoClose, IoMailSharp, IoCartOutline, IoChevronForward, IoChevronDownOutline, IoPersonCircleOutline, IoCloseSharp } from "react-icons/io5";
import "./Navigation.css";

function Navigation2() {
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
      <header className="header-nav2">
        <div className="nav2-left">
          <ul>
            <Link to="/TopDeals">Top Deals</Link>
            <Link to="/Products">Deal of the Day</Link>
            <li>TotalTech Membership</li>
            <li>Credit Card</li>
            <li>Best Buy Outlet</li>
            <li>
              More <IoChevronDownOutline className="nav2-icons" />
            </li>
          </ul>
        </div>
        <div className="nav2-right">
          <ul>
            <li>
              <IoPersonCircleOutline className={`nav2-icons ${isMenuOpen ? "menu-open" : ""}`}
                onClick={toggleMenu} /> Account{" "}
              <IoChevronDownOutline
                className={`nav2-icons ${isMenuOpen ? "menu-open" : ""}`}
                onClick={toggleMenu}
              />
            </li>
            <li>Recently viewed <IoChevronDownOutline className="nav2-icons" /></li>
            <li>Order Status <IoChevronDownOutline className="nav2-icons" /></li>
            <li className="dashboardlink"><Link to="AdminPage">Saved item<IoChevronDownOutline className="nav2-icons" /></Link></li>
          </ul>
        </div>
        {isMenuOpen && (
          <div className="mega-menu2" onMouseLeave={toggleMenu} ref={menuRef}>
            <div className="mega-menu-column">
              <div className="mega-menu-section2">
                <div className="guest-user">
                  <p className="guest-user-text free-shipping-text">
                    <p className="user-text">My Best Buy® members get free shipping with no <br />
                      minimum purchase. Plus, exclusive offers and more.</p>
                  </p>
                  <div className="account-btn">
                    <Link to="/signin" className="sign-in-btn">Sign In</Link>
                    <Link to="/createAccount" className="create-acc-btn">Create Account</Link>
                  </div>
                </div>
                <li className="separateThis"></li>
                <ul>
                  <li>
                    <button>
                      Account
                      <span>Your info at a glance</span>
                    </button>
                  </li>
                  <li>
                    <button>
                      Purchases
                      <span>Track, change, cancel</span>
                    </button>
                  </li>
                  <li>
                    <button>
                      Product
                      <span>Support, manuals, guides</span>
                    </button>
                  </li>
                  <li className="separateThis"></li>
                  <li>
                    <button>
                      Payment Method
                      <span>Saved credit cards</span>
                    </button>
                  </li>
                  <li>
                    <button>
                      Plans and Subscriptions
                    </button>
                  </li>
                  <li>
                    <button>
                      Digital Library
                      <span>Your download</span>
                    </button>
                  </li>
                  <li className="separateThis"></li>
                  <li>
                    <button>
                      Member Offer
                    </button>
                  </li>
                  <li>
                    <button>
                     Total Tech Support
                    </button>
                  </li>
                  <li>
                    <button>
                      Free Home Consultant
                    </button>
                  </li>
                  <li className="separateThis"></li>
                  <li>
                    <button>
                     Account Setting
                      <span>Addresses, password, preferences</span>
                    </button>
                  </li>
                  <li>
                    <button className="menuCloseBtn" onClick={toggleMenu}>
                      <IoCloseSharp />
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

export default Navigation2;
