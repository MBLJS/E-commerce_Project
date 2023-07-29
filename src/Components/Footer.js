import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram, IoLogoYoutube } from "react-icons/io";
import { IoLogoPinterest } from "react-icons/io5";

function Footer() {
  return (
    <footer className="footer">
      <ul className="footer-ul">
        <div className="footer-sec1">
          <div className="footer-svg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="#70757D">
              <path d="M16.04.73C7.64.73.8 7.57.8 15.97s6.84 15.25 15.24 15.25c8.41 0 15.25-6.84 15.25-15.25 0-8.4-6.84-15.24-15.25-15.24zm0 28.53a13.3 13.3 0 0 1 0-26.58 13.3 13.3 0 0 1 0 26.58zm1.41-5.38a1.45 1.45 0 1 1-2.9 0 1.45 1.45 0 0 1 2.9 0zm3.73-12.56c0 2.3-1.47 3.5-2.65 4.48-.94.77-1.5 1.28-1.5 1.98v1.96a.98.98 0 0 1-1.96 0v-1.96c0-1.66 1.17-2.63 2.21-3.49 1.05-.86 1.95-1.6 1.95-2.97 0-.03-.04-3.05-3.19-3.05-3.06 0-3.38 3.1-3.4 3.24a.98.98 0 1 1-1.95-.18c.17-1.74 1.5-5.02 5.35-5.02 3.77 0 5.14 3 5.14 5z" />
            </svg>
            <strong >Visit our Support Center</strong>
          </div>
          <div className="footer-svg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="#70757D">
              <path d="M30 9.43a.92.92 0 0 1-.36-.07L16 4.07 2.36 9.36a1 1 0 0 1-1.29-.57.99.99 0 0 1 .57-1.29l13.64-5.29c.46-.18.98-.18 1.45 0L30.36 7.5A1 1 0 0 1 30 9.43z"></path><path d="M16 30a.98.98 0 0 1-.41-.09l-6.24-2.77a1 1 0 0 1-.51-1.32 1 1 0 0 1 1.32-.51l5.84 2.6 13-5.77V9.92L16.38 15.1a1 1 0 0 1-.76 0L3 9.92v12.22l2.93 1.3a1 1 0 0 1 .51 1.32 1 1 0 0 1-1.32.51L1.59 23.7a1 1 0 0 1-.59-.91V8.43a1 1 0 0 1 .44-.83c.28-.19.63-.22.94-.1L16 13.09 29.62 7.5c.31-.13.66-.09.94.09.27.19.44.5.44.84v14.36c0 .4-.23.75-.59.91l-14 6.21A.98.98 0 0 1 16 30z"></path><path d="M16 29.53a1 1 0 0 1-1-1V14.17c0-.55.45-1 1-1s1 .45 1 1v14.36a1 1 0 0 1-1 1z"></path><path d="M23.54 19.48a1 1 0 0 1-1-1v-6.49L8.83 6.85a1 1 0 0 1 .7-1.88l14.36 5.38a1 1 0 0 1 .65.94v7.18a1 1 0 0 1-1 1.01z"></path>
            </svg>
            <strong>Check your Order Status</strong>
          </div>
          <div className="footer-svg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="#70757D">
              <path d="M29.55 17.25h-.52l-2.56-5.2a.98.98 0 0 0-.88-.55h-4.05V4.77a.98.98 0 0 0-.97-.98H4.03a.98.98 0 0 0-.98.98v2.15a.98.98 0 0 0 1.95 0V5.75h14.6v11.48H5v-.5a.98.98 0 0 0-1.95 0v5.67a2.43 2.43 0 0 0 2.43 2.43h.8a3.53 3.53 0 0 0 7.04 0h8.93a3.53 3.53 0 0 0 7.05 0h.25c1.35 0 2.45-1.1 2.45-2.45V19.7c0-1.35-1.1-2.45-2.45-2.45zm-19.75 9a1.58 1.58 0 1 1 0-3.17 1.58 1.58 0 0 1 0 3.17zm15.97 0a1.58 1.58 0 1 1 0-3.17 1.58 1.58 0 0 1 0 3.17zm4.28-3.87a.5.5 0 0 1-.5.5h-.74a3.52 3.52 0 0 0-6.06 0h-9.92a3.53 3.53 0 0 0-3.03-1.75c-1.3 0-2.42.7-3.03 1.74h-1.3A.47.47 0 0 1 5 22.4v-3.21h15.58l.1.01c.54 0 .97-.44.97-.98v-4.76H25l2.55 5.2a1 1 0 0 0 .88.54h1.13c.27 0 .5.22.5.5v2.68z"></path><path d="M8.98 13.44a.98.98 0 0 0-.98-.97l-7.02.01a.98.98 0 0 0 0 1.96L8 14.42c.54 0 .98-.44.98-.98zM4 11.15h4a.98.98 0 0 0 0-1.96H4a.98.98 0 0 0 0 1.96z"></path>
            </svg>
            <strong>Shipping, Delivery & Store Pickup</strong>
          </div>
          <div className="footer-svg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="#70757D">
              <path d="M13.54 14.45h5.12a.98.98 0 0 0 0-1.95h-5.12a.98.98 0 0 0 0 1.95z"></path><path d="M24.36 8.59H7.84a.98.98 0 0 0-.97.98V22.1c0 .54.43.97.97.97h16.52c.54 0 .98-.43.98-.97V9.57a.98.98 0 0 0-.98-.98zm-.98 12.53H8.82V10.54h14.56v10.58z"></path><path d="m31.16 4.57-2.95-2.95A.98.98 0 1 0 26.83 3l1.28 1.28H11.94a.98.98 0 0 0 0 1.95H28.1l-1.28 1.29A.98.98 0 0 0 28.2 8.9l2.95-2.95a.98.98 0 0 0 0-1.38zM18.48 25.4H3.93l1.28-1.28a.98.98 0 1 0-1.38-1.38L.88 25.69a.98.98 0 0 0 0 1.38l2.95 2.95a.97.97 0 0 0 1.38 0c.39-.38.39-1 0-1.38l-1.28-1.29h14.55a.98.98 0 1 0 0-1.95z"></path>
            </svg>
            <strong class="mx-auto my-100">Returns &amp; Exchanges</strong>
          </div>
        </div>
      </ul>
      <div className="footer-flex">
        <div className="grid">
          <div className="grid1">
            <div>
              <h3>Order &amp; Purchases</h3>
              <ul>
                <li class="body-copy">
                  <p>Check Order Status</p>
                </li>
                <li class="body-copy">
                  <p >Shipping, Delivery &amp; Pickup</p>
                </li>
                <li class="body-copy">
                  <p>Returns &amp; Exchanges</p>
                </li>
                <li class="body-copy">
                  <p>Price Match Guarantee</p>
                </li>
                <li class="body-copy">
                  <p>Product Recalls</p>
                </li>
                <li class="body-copy">
                  <p>Trade-In Program</p>
                </li>
                <li class="body-copy">
                  <p>Gift Cards</p>
                </li>
              </ul>
            </div>
            <div>
              <h3>Payment Options</h3>
              <ul>
                <li><p>My Best Buy® Credit Card</p></li>
                <li><p>Pay Your Bill at Citibank</p></li>
                <li><p>Lease to Own</p></li>
              </ul>
            </div>

          </div>
          <div className="grid2">
            <div>
              <h3>Support &amp; Services</h3>
              <ul>
                <li>
                  <p>Visit our Support Center</p>
                </li>
                <li>
                  <p>Shop with an Expert</p>
                </li>
                <li>
                  <p>Schedule a Service</p>
                </li>
                <li>
                  <p>Manage an Appointment</p>
                </li>
                <li>
                  <p>Protection &amp; Support Plans</p>
                </li>
                <li>
                  <p>Haul Away &amp; Recycling</p>
                </li>
                <li>
                  <p>Contact Us</p>
                </li>
              </ul>
            </div>
            <div>
              <h3>Rewards &amp; Membership</h3>
              <ul>
                <li><p>Best Buy Totaltech</p></li>
                <li><p>My Best Buy</p></li>
                <li><p>View Points &amp; Certificates</p></li>
                <li><p>Member Offers</p></li>
              </ul>
            </div>
          </div>
          <div className="grid3">
            <div>
              <h3>Partnerships</h3>
              <ul>
                <li><p>Affiliate Program</p></li>
                <li><p>Advertise with Us</p></li>
                <li><p>Developers</p></li>
                <li><p>Best Buy Health</p></li>
                <li><p>Best Buy Education</p></li>
                <li><p>Best Buy Business</p></li>
              </ul>
            </div>
            <div>
              <h3>About Best Buy</h3>
              <ul>
                <li><p>Corporate Information</p></li>
                <li><p>Careers</p></li>
                <li><p>Corporate Responsibility &amp; Sustainability</p></li>
                <li><p>Discover &amp; Learn</p></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-flex2">
          <Link to="">Sign in or Create Account</Link>
          <hr className="form-hr" />
          <form>
            <h3>Get the latest deals and more.</h3>
            <div className="footer-form-email">
              <div>
                <input type="email" placeholder="Enter email address" />
              </div>
              <button class="c-button c-button-secondary c-button-sm email-signup-button w-full" type="submit">Sign Up</button>
            </div>
          </form>
          <hr className="form-hr"/>
          <div className="footer-best-buy">
            <div>
              <svg aria-hidden="true" role="img" viewBox="0 0 100 100" fill="#0046BE" height="42px" width="42px">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M21.85 22.25c.54 0 .98.43.98.97v4.67a2.95 2.95 0 0 1-2.95 2.96H7.16a2.93 2.93 0 0 1-2.93-2.93V4.09a2.95 2.95 0 0 1 2.94-2.94h12.7a2.96 2.96 0 0 1 2.96 2.95v.47a.98.98 0 1 1-1.96 0V4.1a1 1 0 0 0-1-1H7.18a1 1 0 0 0-.99 1v23.82c0 .53.44.97.98.97h12.72a1 1 0 0 0 1-1v-4.67c0-.53.43-.97.97-.97zm-7.34 3.59a.97.97 0 0 1-.98.98.97.97 0 0 1-.98-.98.98.98 0 1 1 1.96 0zM12.04 12.8c.54 0 .97.43.97.98a.98.98 0 0 1-.97.97.98.98 0 0 1-.98-.97c0-.55.43-.98.98-.98zm16.15-4.82v11.8c0 .53-.44.97-.98.97h-14.8a.98.98 0 0 1-.69-.27l-3.66-3.57a.98.98 0 0 1-.3-.7v-4.76c0-.27.11-.53.3-.71l3.68-3.47a.98.98 0 0 1 .67-.27h14.8c.54 0 .98.44.98.98zM12.8 18.8h13.43V8.96H12.8l-3.08 2.92v3.93l3.08 3z"></path>
                </svg>
              </svg>
            </div>
            <div className="footer-learn-more">
              <span>
                Best Buy app
              </span>
              <Link className="Link">
                Learn more <span>›</span>
              </Link>
            </div>
          </div>
          <hr className="form-hr"/>
          <div className="footer-social">
            <IoLogoFacebook />
            <IoLogoTwitter />
            <IoLogoInstagram />
            <IoLogoYoutube />
            <IoLogoPinterest />
          </div>
          <hr  className="form-hr"/>
          <Link>Blogger Network, Videos & more</Link>
        </div>
      </div>

      <div className="footer-experience">
        <div>
          <span>How was your experience?</span>
          <button type="button">Give feedback about our website</button>
        </div>
        <div className="footer-canada">
          <button type="button">Mobile Site</button>
          <Link>Best Buy Canada</Link>
        </div>
      </div>
      <hr className="last-hr"/>

      <div className="footer-Accessibility">
        <Link >Accessibility</Link>
        <Link >Terms &amp; Conditions</Link>
        <Link >Privacy</Link>
        <Link>Interest-Based Ads</Link>
        <Link >State Privacy Rights</Link>
        <Link >CA Do Not Sell/Share My Personal Information</Link>
        <Link >Limit Use of My Sensitive Personal Information</Link>
        <Link >Targeted Advertising Opt Out</Link>
        <Link >CA Supply Chain Transparency Act</Link>
      </div>
      <span class="footer-last">
        In-store pricing may vary. Prices and offers are subject to change. © 2023 Best Buy. All rights reserved. BEST BUY, the BEST BUY logo, the tag design, and MY BEST BUY are trademarks of Best Buy and its affiliated companies.
      </span>
    </footer>
  );
}

export default Footer;
