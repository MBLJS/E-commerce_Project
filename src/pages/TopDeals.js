import Navigation1 from "../Components/Navigation1";
import Navigation2 from "../Components/Navigation2";
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
import { IoCart } from "react-icons/io5";



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Footer from "../Components/Footer";


function TopDeals() {


  var settings = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 9,
    slidesToScroll: 9,
    initialSlide: 0,
  };


  return (
    <div>
      <Navigation1 />
      <Navigation2 />
      <section className="gl-84094 custom-vpt-background">
        <div className="topbanner-d-flex">
          <h1>Top Deals</h1>
          <h2>Great deals</h2>
          <h3>happening right now<span>.</span></h3>
        </div>
      </section>
      <div className="product-topDeals">
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

      <div className="Our-featured">
        <h2>
          Today's featured deals
        </h2>
      </div>
      <hr />

      {/* <div className="product-windows-background">

      </div> */}


      <div className="banner-wrapper">
        <img className="banner-image" src={window11} alt="Windows 11" />
        <div className="banner-content">
          <h3 className="banner-heading">Save up to <br /><span class="banner-price"><span className="banner-dollar">$</span>400 <br /></span> on select Windows laptops.</h3>
          <p className="banner-description">Minimum savings is $50.</p>
          <a className="banner-link" href="/site/promo/shop-select-windows-laptops">Shop Now</a>
        </div>
      </div>

      <div className="banner2-wrapper">
        <div className="banner2-content">
          <h3 className="banner2-heading">Save up to <br /><span class="banner-price"><span className="banner-dollar">$</span>500 <br /></span> on select big-screen Tvs.</h3>
          <p className="banner2-description">samsung model QN65QN90CAFXZA has a $500 saving (not pictured).</p>
          <a className="banner2-link" href="/site/promo/shop-select-windows-laptops">Shop Now</a>
        </div>
      </div>


      <div className="wf-offer">
        <div className="wf-offer-1">
          <div className="wf-offer-1-top">
            <div className="wf-offer-1-top-img">
              <img src={samsungLogo} alt="" />
            </div>
            <div className="wf-offer-1-top-desc">
              <h3>Samsung - 75” Class CU7000 Crystal UHD 4K UHD Smart Tizen TV</h3>
            </div>

            <div className="wf-offer-1-top-rating">
              <span>⭐⭐⭐⭐⭐(138)</span>
            </div>

            <div className="wf-offer-bottom">
              <div className="wf-offer-bottom-flex-colum">
                <div className="wf-bottom-price">
                  <div>
                    <p>$749.99</p>
                  </div>
                  <div className="wf-bottom-save">
                    <div>Save $50</div>
                    <div>Was $799.99</div>
                  </div>
                </div>

                <div className="wf-bottom-addToCart">
                  <button>
                    <IoCart/> 
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="wf-offer-1">
          <div className="wf-offer-1-top">
            <div className="wf-offer-1-top-img">
              <img src={samsungLogo} alt="" />
            </div>
            <div className="wf-offer-1-top-desc">
              <h3>Samsung - 65" Class S90C OLED Smart Tizen TV</h3>
            </div>

            <div className="wf-offer-1-top-rating">
              <span>⭐⭐⭐⭐⭐(29)</span>
            </div>

            <div className="wf-offer-bottom">
              <div className="wf-offer-bottom-flex-colum">
                <div className="wf-bottom-price">
                  <div>
                    <p>$2,199.99</p>
                  </div>
                  <div className="wf-bottom-save">
                    <div>Save $400</div>
                    <div>Was $2,599.99</div>
                  </div>
                </div>

                <div className="wf-bottom-addToCart">
                  <button>
                    <IoCart/> 
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="wf-offer-1">
          <div className="wf-offer-1-top">
            <div className="wf-offer-1-top-img">
              <img src={TCl} alt="" />
            </div>
            <div className="wf-offer-1-top-desc">
              <h3>TCL - 55" Class Q7 Q-Class 4K QLED HDR Smart TV with Google TV</h3>
            </div>

            <div className="wf-offer-1-top-rating">
              <span>⭐⭐⭐⭐⭐(9)</span>
            </div>

            <div className="wf-offer-bottom">
              <div className="wf-offer-bottom-flex-colum">
                <div className="wf-bottom-price">
                  <div>
                    <p>$649.99</p>
                  </div>
                  <div className="wf-bottom-save">
                    <div>Save $100</div>
                    <div>Was $749.99</div>
                  </div>
                </div>

                <div className="wf-bottom-addToCart">
                  <button>
                    <IoCart/> 
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="wf-offer-1">
          <div className="wf-offer-1-top">
            <div className="wf-offer-1-top-img">
              <img src={LG} alt="" />
            </div>
            <div className="wf-offer-1-top-desc">
              <h3>LG - 50" Class 80 Series QNED 4K UHD Smart webOS TV</h3>
            </div>

            <div className="wf-offer-1-top-rating">
              <span>⭐⭐⭐⭐⭐(138)</span>
            </div>

            <div className="wf-offer-bottom">
              <div className="wf-offer-bottom-flex-colum">
                <div className="wf-bottom-price">
                  <div>
                    <p>$799.99</p>
                  </div>
                  <div className="wf-bottom-save">
                    <div>Save $100</div>
                    <div>Was $899.99</div>
                  </div>
                </div>

                <div className="wf-bottom-addToCart">
                  <button>
                    <IoCart/> 
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>




    </div>
  )
}

export default TopDeals;