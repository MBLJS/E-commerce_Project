import Navigation1 from "../Components/Navigation1";
import Navigation2 from "../Components/Navigation2";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { IoCart } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import DealOfDaySamsung from "../Components/images/topdealSamsung.jpg";
import dodGrid1 from "../Components/images/dodGrid1.jpg";
import dodGrid2 from "../Components/images/dodGrid2.jpg";
import dodGrid3 from "../Components/images/dodGrid3.jpg";
import dodGrid4 from "../Components/images/dodGrid4.jpg";
import dodGrid5 from "../Components/images/dodGrid5.jpg";
import dodGrid6 from "../Components/images/dodGrid6.jpg";
import dodGrid7 from "../Components/images/dodGrid7.jpg";
import dodGrid8 from "../Components/images/dodGrid8.jpg";
import carouselImg1 from "../Components/images/carouselImg1.jpg";
import carouselImg2 from "../Components/images/carouselImg2.jpg";
import carouselImg3 from "../Components/images/carouselImg3.jpg";
import carouselImg4 from "../Components/images/carouselImg4.jpg";
import carouselImg5 from "../Components/images/carouselImg5.jpg";
import carouselImg6 from "../Components/images/carouselImg6.jpg";
import carouselImg7 from "../Components/images/carouselImg7.jpg";
import carouselImg8 from "../Components/images/carouselImg8.jpg";
import carouselImg9 from "../Components/images/carouselImg9.jpg";
import carouselImg10 from "../Components/images/carouselImg10.jpg";
import carouselImg11 from "../Components/images/carouselImg11.jpg";
import carouselImg12 from "../Components/images/carouselImg12.jpg";
import carouselImg13 from "../Components/images/carouselImg13.jpg";
import carouselImg14 from "../Components/images/carouselImg14.jpg";
import carouselImg15 from "../Components/images/carouselImg15.jpg";
import carouselImg16 from "../Components/images/carouselImg16.jpg";
import carouselImg17 from "../Components/images/carouselImg17.jpg";
import carouselImg18 from "../Components/images/carouselImg18.jpg";
import window11 from "../Components/images/Windows11.png";
import samsungLogo from "../Components/images/Samsung_Logo.png";
import TCl from "../Components/images/TCL_Red.png";
import LG from "../Components/images/LG_4C.png";
import freeShip from "../Components/images/freeShip.jpg";
import ready2 from "../Components/images/ready2.png";
import Dealof from "../Components/images/Dealof.png";
import ClearanceOpenBox from "../Components/images/ClearanceOpenBox.jpg";
import Footer from "../Components/Footer";

function Product() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 9,
    slidesToScroll: 9,
    initialSlide: 0,
  };

  const [products, setProducts] = useState([]);
  const filteredProducts = products.filter((product) => product.category === 'muhammed');

  const getProduct = () => {
    fetch('http://159.65.21.42:9000/products')
      .then((resp) => resp.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <Navigation1 />
      <Navigation2 />
      <div className="DealOfDay-top">
        <div className="DealOfDay-top-flex1">
          <div className="DealOfDay-h2">
            <h2>
              <span>Deal</span>
              of the Day.
            </h2>
          </div>
          <p>Greate new deals. Every day.</p>
          <div className="DealOfDay-top-Link">
            <Link>See Deal of the Day FAQs</Link>
          </div>
        </div>
        <div className="countdown-top">
          <div className="coundown-clock">
            <ul>
              <li>
                <span className="countdown-hours">00</span>
              </li>
              <li className="timesep">:</li>
              <li>
                <span className="countdown-mins">00</span>
              </li>
              <li className="timesep">:</li>
              <li>
                <span className="countdown-sec">00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="DealOfDay-sec2">
        <div className="DealOfDay-sec2-flex">
          <div className="dod-sec2-img">
            <img src={DealOfDaySamsung} alt="" />
          </div>

          <div className="dod-sec2-desc">
            <div>
              <h1>Save $500 on select Samsung Galaxy 13.3" 4K touch-sc</h1>
            </div>
            <div className="dod-sec2-shop">
              <Link>Shop Now</Link>
            </div>
          </div>
        </div>
      </div>


      <div className="Our-featured">
        <h2>
          Bonus Deals of the Day
        </h2>
      </div>
      <hr />

      <div className="dod-sec3-grid">
        {filteredProducts.map((productDashBoard, i) => (
            <div className="new5-offer" key={productDashBoard._id}>
              <div className="new5-offer-top">
                <div className="new5-offer-top-img">
                  <img src={productDashBoard.image} alt="" />
                </div>
                <div className="new5-offer-top-desc">
                  <h3>{productDashBoard.description}</h3>
                </div>
                <div className="new5-offer-top-rating">
                  <span>⭐⭐⭐⭐⭐(138)</span>
                </div>
                <div className="new5-offer-bottom">
                  <div className="new5-offer-bottom-flex-column">
                    <div className="new5-bottom-price">
                      <div>
                        <p>₦{productDashBoard.price}</p>
                      </div>
                      <div className="new5-bottom-save">
                        <div>Save $100</div>
                        <div>Was $899.99</div>
                      </div>
                    </div>
                    <div className="new5-bottom-addToCart">
                      <Link to={`/products/${productDashBoard._id}`} key={i}>
                        <IoCart />
                        Add to Cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        ))}
      </div>



      <div className="dod-ad">
        <div>
          advertisement
        </div>

      </div>



      <div className="product-topDeals bordertop-dod">
        <h2 >
          <div className="product-deals-flex">
            <div></div>
            <span>Top Deals</span>
          </div>
        </h2>
        <div className="product-featured-flex">
          <span>Today's featured deals and top tech. Valid through 6/29/23.*</span>
        </div>
      </div>



      <div className="carousel">
        <Slider {...settings}>
          <div className="productBox">
            <div className="hompage-sec4-1-flex">
              <div className="product-1">
                <img src={carouselImg1} alt="" />
              </div>
              <div className="productDesc-1">
                <span>Major Appliances</span>
              </div>
            </div>
          </div>
          <div className="productBox">
            <div className="hompage-sec4-2-flex">
              <div className="product-2">
                <img src={carouselImg2} alt="" />
              </div>
              <div className="productDesc-2">
                <span>Small Kichen Appliance</span>

              </div>
            </div>
          </div>
          <div className="productBox">
            <div className="hompage-sec4-3-flex">
              <div className="product-3">
                <img src={carouselImg3} alt="" />
              </div>
              <div className="productDesc-3">
                <span>Cell Phones & Accessories</span>


              </div>
            </div>
          </div>
          <div className="productBox">
            <div className="hompage-sec4-4-flex">
              <div className="product-4">
                <img src={carouselImg4} alt="" />
              </div>
              <div className="productDesc-4">
                <span>Cameras & Camcorders</span>

              </div>
            </div>
          </div>
          <div className="productBox">
            <div className="hompage-sec4-5-flex">
              <div className="product-5">
                <img src={carouselImg5} alt="" />
              </div>
              <div className="productDesc-5">
                <span>Sound Bars & Speaker</span>

              </div>
            </div>
          </div>
          <div className="productBox">
            <div className="hompage-sec4-6-flex">
              <div className="product-6">
                <img src={carouselImg6} alt="" />
              </div>
              <div className="productDesc-6">
                <span>Smart Home security & Wi-Fi</span>

              </div>
            </div>
          </div>

          <div className="productBox">
            <div className="hompage-sec4-6-flex">
              <div className="product-7">
                <img src={carouselImg7} alt="" />
              </div>
              <div className="productDesc-7">
                <span>Wearable Technology</span>

              </div>
            </div>
          </div>

          <div className="productBox">
            <div className="hompage-sec4-6-flex">
              <div className="product-8">
                <img src={carouselImg8} alt="" />
              </div>
              <div className="productDesc-8">
                <span>Floor care & Home Air Quality</span>

              </div>
            </div>
          </div>

          <div className="productBox">
            <div className="hompage-sec4-6-flex">
              <div className="product-9">
                <img src={carouselImg9} alt="" />
              </div>
              <div className="productDesc-9">
                <span>Movies, Music & Streaming Subcriptions</span>

              </div>
            </div>
          </div>

          <div className="productBox">
            <div className="hompage-sec4-6-flex">
              <div className="product-10">
                <img src={carouselImg10} alt="" />
              </div>
              <div className="productDesc-10">
                <span>Toys, Games & Collectibles</span>

              </div>
            </div>
          </div>

          <div className="productBox">
            <div className="hompage-sec4-6-flex">
              <div className="product-11">
                <img src={carouselImg11} alt="" />
              </div>
              <div className="productDesc-11">
                <span>Car Electronics & GPS</span>

              </div>
            </div>
          </div>

          <div className="productBox">
            <div className="hompage-sec4-6-flex">
              <div className="product-12">
                <img src={carouselImg12} alt="" />
              </div>
              <div className="productDesc-12">
                <span>Health & Fitness</span>

              </div>
            </div>
          </div>

          <div className="productBox">
            <div className="hompage-sec4-6-flex">
              <div className="product-13">
                <img src={carouselImg13} alt="" />
              </div>
              <div className="productDesc-13">
                <span>Home & Outdoor</span>

              </div>
            </div>
          </div>

          <div className="productBox">
            <div className="hompage-sec4-6-flex">
              <div className="product-14">
                <img src={carouselImg4} alt="" />
              </div>
              <div className="productDesc-14">
                <span>Personal Care & Beauty</span>

              </div>
            </div>
          </div>

          <div className="productBox">
            <div className="hompage-sec4-6-flex">
              <div className="product-15">
                <img src={carouselImg15} alt="" />
              </div>
              <div className="productDesc-15">
                <span>Video & Streaming Media Player</span>

              </div>
            </div>
          </div>

          <div className="productBox">
            <div className="hompage-sec4-6-flex">
              <div className="product-16">
                <img src={carouselImg16} alt="" />
              </div>
              <div className="productDesc-16">
                <span>Electric Transportation</span>

              </div>
            </div>
          </div>

          <div className="productBox">
            <div className="hompage-sec4-6-flex">
              <div className="product-17">
                <img src={carouselImg17} alt="" />
              </div>
              <div className="productDesc-17">
                <span>Baby Care</span>

              </div>
            </div>
          </div>

          <div className="productBox">
            <div className="hompage-sec4-6-flex">
              <div className="product-18">
                <img src={carouselImg18} alt="" />
              </div>
              <div className="productDesc-18">
                <span>Gift Card</span>

              </div>
            </div>
          </div>
        </Slider>
      </div>


      <div className="hompage-sec7-flex dod-border">
        <div className="hompage-sec7-1">
          <div className="hompage-sec7-1-flex">
            <div className="hompage-sec7-1-flex-img">
              <img src={freeShip} alt="" />
            </div>
            <div className="hompage-sec7-1-flex-desc">
              <div className="textarea1">
                <h2>Free shipping</h2>
                <p>on orders $35 and up.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hompage-sec7-2  ">
          <div className="hompage-sec7-3-flex">
            <div className="hompage-sec7-3-flex-img">
              <img src={ready2} alt="" />
            </div>
            <div className="hompage-sec7-3-flex-desc">
              <div className="textarea2">
                <h2>Ready in one hour</h2>
                <p>with Store Pickup.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hompage-sec7-3">
          <div className="hompage-sec7-3-flex">
            <div className="hompage-sec7-3-flex-img">
              <img src={freeShip} alt="" />
            </div>
            <div className="hompage-sec7-3-flex-desc">
              <div className="textarea">
                <h2>Same-day delivery.</h2>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="homepage-sec3-flex">
        <div className="homepage-sec3-div3">
          <div>
            <p>advertisement</p>
          </div>
        </div>
        <div className="homepage-sec3-div2">
          <div>
            <img src={Dealof} alt="" />
          </div>
        </div>
        <div className="homepage-sec3-div1">
          <div>
            <img src={ClearanceOpenBox} alt="" />
          </div>
        </div>
      </div>


      <div className="dod-dailyDeals">
        <div className="dod-dailyDeals-header">
          <h3>Daily deals at Best Buy.</h3>
        </div>
        <div className="dod-dailyDeals-main">
          <p>
            <h5>Where every day is a one-day sale.</h5>
            When you shop the Best Buy Deal of the Day, or sign up for our daily emails, you'll find fantastic prices on tech from every corner of our site. For example, if you're shopping for laptop deals, we have incredible offers on powerful laptops that will get you ready for work or play and leave money in your pocket for cool accessories too.
            Although these amazing deals rotate every day, we always have more than one deal going on per day. We even have sales on whole categories of products, and deals tailored for a particular audience, such as back-to-school deals offering savings on the tools and tech students need to help them succeed throughout every stage of their education.
            While some sales, like our Black Friday sale and our Cyber Monday sale, only happen once a year, the Deal of the Day is an ongoing event that lets you look for new deals every morning in your inbox or on BestBuy.com. In addition, you can get even more hot deals on all of the tech you love, including some of the latest and most popular tech on the market.
          </p>
        </div>
      </div>

      <Footer />







    </div>
  )
}

export default Product;