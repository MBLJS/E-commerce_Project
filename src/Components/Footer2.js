import "./Footer.css";
import { Link } from "react-router-dom";
import logoPics from "./images/LogoHome.svg";



function Footer2() {

  return (
    <div>
      <footer class="sign-in-footer">
  <div>
    <div>
      <div>
        <nav>
          <ul>
            <li><Link to="">Terms and Conditions</Link><span></span></li>
            <li><Link to="">Privacy</Link><span></span></li>
            <li><Link to="">Interest-Based Ads</Link></li>
          </ul>
        </nav>
        <div>
          <button type="button">Mobile Site</button>
        </div>
      </div>
      <div className="clearer"></div>
      <div className="mini-footer__disclaimer">Prices and offers are subject to change. © 2023 Best Buy. All rights reserved. BEST BUY, the BEST BUY logo, the Tag Design, MY BEST BUY, and BESTBUY.COM are trademarks of Best Buy and its affiliated companies.</div>
    </div>
  </div>
</footer>

    </div>
  );
}

export default Footer2;
