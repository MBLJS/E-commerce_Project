import Navigation1 from "../Components/Navigation1";
import Navigation2 from "../Components/Navigation2";
import Footer from "../Components/Footer"
import { Link } from "react-router-dom"
import { IoStar } from "react-icons/io5";
import banner from "../Components/images/top.jpg";
import HomeTv1 from "../Components/images/HomeTv1.jpg";
import HomeTv2 from "../Components/images/HomeTv2.jpg";
import HomeTv3 from "../Components/images/HomeTV3.jpg";
import HomeTv4 from "../Components/images/HomeTv4.jpg";
import openBox from "../Components/images/ClearanceOpenBox.jpg";
import HomeTv5 from "../Components/images/HomeTv5.jpg";
import HomeTv6 from "../Components/images/HomeTv6.jpg";
import Hometv7 from "../Components/images/Hometv7.jpg";
import HomeTv8 from "../Components/images/Hometv8.jpg";
import HomeTv9 from "../Components/images/Hometv9.jpg";
import HomeTv10 from "../Components/images/Hometv10.jpg";
import HomeTv11 from "../Components/images/HomeTv11.jpg";
import HomeTv12 from "../Components/images/HomepageTv12.jpg";
import smallBannerContent from "../Components/images/smallBannerContect.png";
import sec3img from "../Components/images/sec3img.jpg";
import sec3img2 from "../Components/images/sec3img2.jpg";
import homepageWatch from "../Components/images/homePageWatch.jpg";
import homepageSamsung from "../Components/images/homePageSamsung.jpg";
import homepagePrinter from "../Components/images/homePagePrinter.jpg";
import homepagePerson1 from "../Components/images/hompagePerson1.png";
import homepagePerson2 from "../Components/images/homepagePerson2.png";
import freeShip from "../Components/images/freeShip.jpg";
import ready2 from "../Components/images/ready2.png";
import HomepageHook from "../Components/images/HompageHook.jpg";
import HomeLive from "../Components/images/HomeLive.jpg";
import HomepageGame from "../Components/images/HompageGame.jpg"
import HomepageOutdoor1 from "../Components/images/HomepageOutdoor1.jpg";
import HomepageOutdoor2 from "../Components/images/HomepageOutdoor2.jpg";
import HomepageOutdoor3 from "../Components/images/HomepageOutdoor3.jpg";
import HomepageOutdoor4 from "../Components/images/HomepageOutdoor4.jpg";
import HomepageBackyard1 from "../Components/images/HomepageBackyard1.jpg";
import HomepageBackyard2 from "../Components/images/HomepageBackyard2.jpg";
import HomepageBackyard3 from "../Components/images/HomepageBackyard3.jpg";
import HomepageBackyard4 from "../Components/images/HomepageBackyard4.jpg";
import HomepageGraduation1 from "../Components/images/HomepageGraduation1.jpg";
import HomepageGraduation2 from "../Components/images/HomepageGraduation2.jpg";
import HomepageGraduation3 from "../Components/images/HomepageGraduation3.jpg";
import HomepageGraduation4 from "../Components/images/HomepageGraduation4.jpg";
import Dealof from "../Components/images/Dealof.png";
import ClearanceOpenBox from "../Components/images/ClearanceOpenBox.jpg";
import Homepage10 from "../Components/images/Homepage10.png";
import HompageLast1 from "../Components/images/HompageLast1.jpg";
import HompageLast2 from "../Components/images/HompageLast2.jpg";
import HompageLast3 from "../Components/images/HompageLast3.jpg";
import HompageLast4 from "../Components/images/HompageLast4.jpg";
import HompageLast5 from "../Components/images/HompageLast5.jpg";
import HompageLast6 from "../Components/images/HompageLast6.jpg";










import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Homepage() {

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5.25,
    slidesToScroll: 1,
    initialSlide: 0,
  };



  return (
    <div>
      <Navigation1 />
      <Navigation2 />
      <div className="home-top-flex">
        <div className="home-top-banner">
          <img src={banner} alt="" />
        </div>

        <div className="home-top-flex-colum">
          <div>
            <div className="home-top-tv ">
              <h2>Recommended for you</h2>
              <ul>
                <li className="home-top-tv-li ">
                  <div className="home-top-tv-div">
                    <img src={HomeTv1} alt="" />
                  </div>
                  <p >Insignia™ - 75" Class F30 Series LED 4K UHD Smart Fire TV</p>
                </li>
                <li className="home-top-tv-li">
                  <div className="home-top-tv-div">
                    <img src={HomeTv2} alt="" />
                  </div>
                  <p>MacBook Air 13.6" Laptop - Apple M2 chip - 8GB Memory - 256GB SSD - Midnight</p>                  </li>
                <li className="home-top-tv-li">
                  <div className="home-top-tv-div">
                    <img src={HomeTv3} alt="" />
                  </div>
                  <p>MacBook Air 13.3" Laptop - Apple M1 chip - 8GB Memory - 256GB SSD - Space Gray</p>
                </li>
                <li className="home-top-tv-li">
                  <div className="home-top-tv-div">
                    <img src={HomeTv4} alt="" />
                  </div>
                  <p>Samsung - 75” Class CU7000 Crystal UHD 4K UHD Smart Tizen TV</p> </li>
              </ul>
            </div>
          </div>
          <div className="home-top-displayFlex">
            <div className="clearance-flex-colum">
              <h2>
                <span className="tech-yellow">Outlet</span>
                <span className="pure-white">Deals</span>
              </h2>
              <div className="open-box-flex-colum">
                <div className="open-box-img">
                  <img src={openBox} alt="" />
                </div>
                <Link>View outlet deals</Link>
              </div>
            </div>
            <div className="topDeals-flex-colum">
              <h2>
                Top Deals
              </h2>
              <div className="macBookAir-flex-colum">
                <div className="macBookAir-box-img">
                  <img src={HomeTv2} alt="" />
                </div>
                <div className="macBookAir-desc">
                  <p>MacBook Air 13.6" Laptop - Apple M2 chip - 8GB Memory - 256GB SSD - Midnight</p>
                </div>
                <div className="priceView-hero-price">
                  <span aria-hidden="true">$999.00</span>
                </div>

                <div className="priceView-previous-price">
                  <span aria-hidden="true">
                    $1,099.00</span>
                </div>
                <div className="topdeal-shop-link">
                  <Link>Shop all Top Deals</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="homePage-sec2">
          <div className="homePage-viewed-boder">
            <button>You Viewed</button>
          </div>
          <div className="homePage-sec2-product">
            <div className="homePage-sec2-manage-all">
              <Link>Manage all your recently viewed items</Link>
            </div>
            <div className="tabbed-content-flex">
              <div className="tabbed-content-1-flex-colum">
                <div>
                  <img src={HomeTv5} alt="" />
                </div>
                <Link>
                  <p>Toshiba - 75" Class C350 Series LED 4K UHD Smart Fire TV</p>
                </Link>
              </div>
              <div className="tabbed-content-2-flex-colum">
                <div>
                  <img src={HomeTv3} alt="" />
                </div>                <Link>
                  <p>MacBook Air 13.3" Laptop - Apple M1 chip - 8GB Memory - 256GB SSD - Space Gray</p>
                </Link>
              </div>
              <div className="tabbed-content-3-flex-colum">
                <div>
                  <img src={HomeTv6} alt="" />
                </div>
                <Link>
                  <p>Apple - MacBook Air 15" Laptop - M2 chip - 8GB Memory - 256GB SSD (Latest Model) - Midnight</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="smallBanner">
        <div className="smallBanner-background">
          <div className="smallbannerContent">
            <img src={smallBannerContent} alt="" />
            <Link>Learn More</Link>
          </div>
          <div className="expert-blue-columns" >
          </div>
          <div className="expert-blue-column-text">
            <h2>The membership you and your tech deserve.</h2>
            <p>Best Buy Totaltech™ provides 24/7/365 tech support, up to 24 months of product protection with active membership, free standard installation and so much more. <br />
              <span>Terms and conditions apply.</span></p>
          </div>
        </div>
      </div>
      <div className="homepage-sec3-flex">
        <div className="homepage-sec3-div1">
          <div>
            <img src={sec3img2} alt="" />
          </div>
        </div>
        <div className="homepage-sec3-div2">
          <div>
            <img src={sec3img} alt="" />
          </div>
        </div>
        <div className="homepage-sec3-div3">
          <div>
            <p>advertisement</p>
          </div>
        </div>
      </div>
      <div className="deals-inspired">
        <h2>
          <span>Deals inspired by your shopping </span>
          <span>(6 items)</span>
        </h2>
      </div>
      <hr />

      <div className="carousel">
        <Slider {...settings}>
          <div className="box">
            <div className="hompage-sec4-1-flex">
              <div className="sec4img-1">
                <img src={HomeTv3} alt="" />
              </div>
              <div className="sec4decs-1">
                <span>MacBook Air 13.3" Laptop - Apple M1 chip - 8GB Memory - 256GB SSD - Gold</span>
                <span><IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> (16.047)</span>
                <span>$799.99</span>
                <span>$999.99</span>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="hompage-sec4-2-flex">
              <div className="sec4img-2">
                <img src={HomeTv5} alt="" />
              </div>
              <div className="sec4decs-2">
                <span>MacBook Air 13.3" Laptop - Apple M1 chip - 8GB Memory - 256GB SSD - Gold</span>
                <span><IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" />(877)</span>
                <span>Clearance</span>
                <span>$329.99</span>
              </div>
            </div>          </div>
          <div className="box">
            <div className="hompage-sec4-3-flex">
              <div className="sec4img-3">
                <img src={Hometv7} alt="" />
              </div>
              <div className="sec4decs-3">
                <span>MacBook Air 13.3" Laptop - Apple M1 chip - 8GB Memory - 256GB SSD - Gold</span>
                <span><IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> (15)</span>
                <span>$329.99</span>
                <span>$529.99</span>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="hompage-sec4-4-flex">
              <div className="sec4img-4">
                <img src={HomeTv8} alt="" />
              </div>
              <div className="sec4decs-4">
                <span>MacBook Air 13.3" Laptop - Apple M1 chip - 8GB Memory - 256GB SSD - Gold</span>
                <span><IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" />(231)</span>
                <span>$569.99</span>
                <span>$619.99</span>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="hompage-sec4-5-flex">
              <div className="sec4img-5">
                <img src={HomeTv9} alt="" />
              </div>
              <div className="sec4decs-5">
                <span>MacBook Air 13.3" Laptop - Apple M1 chip - 8GB Memory - 256GB SSD - Gold</span>
                <span><IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> (43,80)</span>
                <span>see price in cart</span>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="hompage-sec4-6-flex">
              <div className="sec4img-6">
                <img src={HomeTv10} alt="" />
              </div>
              <div className="sec4decs-6">
                <span>MacBook Air 13.3" Laptop - Apple M1 chip - 8GB Memory - 256GB SSD - Gold</span>
                <span><IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> (43,80)</span>
                <span>$449.99</span>
                <span>$59.99</span>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div className="Our-featured">
        <h2>
          Our featured offers
        </h2>
      </div>
      <hr />

      <div className="homepage-sec5-flex">
        <div className="homepage-sec5-1-flex-colum">
          <div className="homepage-sec5-1-img">
            <img src={homepageWatch} alt="" />
          </div>
          <div className="homepage-sec5-1-decs">
            <h2>Save up to $70 on select Samsung Galaxy Watch5 and Watch5 Pro.</h2>
            <div className="homepage-sec5-1-span">
              <span>Minimum savings is $50.</span>
            </div>
          </div>
        </div>

        <div className="homepage-sec5-2-flex-colum">
          <div className="homepage-sec5-2-img">
            <img src={homepageSamsung} alt="" />
          </div>
          <div className="homepage-sec5-2-decs">
            <h2>Select Samsung Galaxy phones on sale</h2>
            <div className="homepage-sec5-2-span">
              <span>Terms and conditions apply.</span>
            </div>
          </div>
        </div>

        <div className="homepage-sec5-3-flex-colum">
          <div className="homepage-sec5-3-img">
            <img src={homepagePrinter} alt="" />
          </div>
          <div className="homepage-sec5-3-decs">
            <h2>Save up to $100 on select HP printers.</h2>
            <div className="homepage-sec5-3-span">
              <span>Minimum savings is $25.</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hompage-sec6-flex">
        <div className="hompage-sec6-1">
          <div className="hompage-sec6-1-flex">
            <div className="hompage-sec6-1-flex-img">
              <img src={homepagePerson1} alt="" />
            </div>
            <div className="hompage-sec6-1-flex-desc">
              <div>
                <div>Gift Ideas.</div>
                <div>Cover your entire list in one stop.</div>
                <Link>Shop Now</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="hompage-sec6-2">
          <div className="hompage-sec6-2-flex">
            <div className="hompage-sec6-2-flex-img">
              <img src={homepagePerson2} alt="" />
            </div>
            <div className="hompage-sec6-2-flex-desc">
              <div>
                <div>Shop with an expert, right from home.</div>
                <div>Call, chat, video chat or in-home consultation.</div>
                <Link>Shop with an Expert</Link>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="hompage-sec7-flex">
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

        <div className="hompage-sec7-2">
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

      <div className="deals-inspired">
        <h2>
          <span>You may also like </span>
          <span>(6 items)</span>
        </h2>
      </div>
      <hr />

      <div className="carousel">
        <Slider {...settings}>
          <div className="box">
            <div className="hompage-sec4-1-flex">
              <div className="sec4img-1">
                <img src={HomepageGame} alt="" />
              </div>
              <div className="sec4decs-1">
                <span>ASUS ROG Ally 7" 120Hz FHD 1080p Gaming Handheld - AMD Ryzen Z1 Extreme Processor - 512GB - White</span>
                <span><IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> (672)</span>
                <span>$699.99</span>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="hompage-sec4-2-flex">
              <div className="sec4img-2">
                <img src={HomeTv6} alt="" />
              </div>
              <div className="sec4decs-2">
                <span>Apple - MacBook Air 15" Laptop - M2 chip - 8GB Memory - 512GB SSD (Latest Model) - Midnight</span>
                <span><IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" />(5)</span>
                <span>$1,499.00</span>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="hompage-sec4-3-flex">
              <div className="sec4img-3">
                <img className="homelive" src={HomeLive} alt="" />
              </div>
              <div className="sec4decs-3">
                <span>FuboTV - Free for 30 days (new subscribers only, not billed unless activated) [Digital]</span>
                <span><IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> (6,853)</span>
                <span>$Free</span>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="hompage-sec4-4-flex">
              <div className="sec4img-4">
                <img src={HomeTv11} alt="" />
              </div>
              <div className="sec4decs-4">
                <span className="HomeTv11-span1">Apple - MacBook Air 15" Laptop - M2 chip - 8GB Memory - 256GB SSD (Latest Model) - Starlight</span>
                <span><IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" />(20)</span>
                <span>$1,299.00</span>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="hompage-sec4-5-flex">
              <div className="sec4img-5">
                <img className="HomepageHook" src={HomepageHook} alt="" />
              </div>
              <div className="sec4decs-5">
                <span>Best Buy essentials™ - Full Motion TV Wall Mount for 47–84" TVs - Black</span>
                <span><IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> (3,422)</span>
                <span>59.00</span>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="hompage-sec4-6-flex">
              <div className="sec4img-6">
                <img src={HomeTv12} alt="" />
              </div>
              <div className="sec4decs-6">
                <span>MacBook Pro 13.3" Laptop - Apple M2 chip - 8GB Memory - 256GB SSD (Latest Model) - Space Gray</span>
                <span><IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> (1,375)</span>
                <span>$1,149.00</span>
                <span>$1,299.00</span>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div className="homepage-sec8-flex">
        <div className="homepage-sec8-1-flex">
          <div className="homepage-sec8-1-header">
            <h2>Out living</h2>
          </div>
          <div className="homepage-sec8-1-grid">
            <div>
              <div className="homepage-sec8-1-grid-img">
                <img src={HomepageOutdoor1} alt="" />
              </div>
              <span>Grils</span>
            </div>
            <div>
              <div className="homepage-sec8-1-grid-img">
                <img src={HomepageOutdoor2} alt="" />
              </div>
              <span>Lawn and garden</span>
            </div>
            <div>
              <div className="homepage-sec8-1-grid-img">
                <img src={HomepageOutdoor3} alt="" />
              </div>
              <span>Portable speaker</span>
            </div>
            <div>
              <div className="homepage-sec8-1-grid-img">
                <img src={HomepageOutdoor4} alt="" />
              </div>
              <span>Smart lighting</span>
            </div>
          </div>
        </div>
        <div className="homepage-sec8-3-flex">
          <div className="homepage-sec8-2-header">
            <h2>Backyard Boosted</h2>
          </div>
          <div className="homepage-sec8-2-grid">
            <div>
              <div className="homepage-sec8-2-grid-img">
                <img src={HomepageBackyard1} alt="" />
              </div>
              <span>Yardbird</span>
            </div>
            <div>
              <div className="homepage-sec8-2-grid-img">
                <img src={HomepageBackyard2} alt="" />
              </div>
              <span>Traeger</span>
            </div>
            <div>
              <div className="homepage-sec8-2-grid-img">
                <img src={HomepageBackyard3} alt="" />
              </div>
              <span>Pit Boss</span>
            </div>
            <div>
              <div className="homepage-sec8-2-grid-img">
                <img src={HomepageBackyard4} alt="" />
              </div>
              <span>Weber</span>
            </div>
          </div>
        </div>
        <div className="homepage-sec8-3-flex">
          <div className="homepage-sec8-3-header">
            <h2>Graduation gift ideas</h2>
          </div>
          <div className="homepage-sec8-3-grid">
            <div>
              <div className="homepage-sec8-3-grid-img">
                <img src={HomepageGraduation1} alt="" />
              </div>
              <span>For the next chapter</span>
            </div>
            <div>
              <div className="homepage-sec8-3-grid-img">
                <img src={HomepageGraduation2} alt="" />
              </div>
              <span>For grads of every age</span>
            </div>
            <div>
              <div className="homepage-sec8-3-grid-img">
                <img src={HomepageGraduation3} alt="" />
              </div>
              <span>For college grads</span>
            </div>
            <div>
              <div className="homepage-sec8-3-grid-img">
                <img src={HomepageGraduation4} alt="" />
              </div>
              <span>For high school grads</span>
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

      <div className="Homepage-sec10-flex">
        <div className="Homepage-sec10-img">
          <img src={Homepage10} alt="Credit cards" />
        </div>
        <div className="Apply-today">
          <div className="applytoday">Apply today and get</div>
          <div>10% back</div>
        </div>
        <div className="in-reward">
          <p>in rewards on your first day of purchases when you are approved for the Card.</p>
        </div>
        <div className="sec9-learn-more">
          <span>Learn More</span>
        </div>
      </div>
      <div className="homepage-last">
        <div className="homepage-last-header">
          <div>Featured Products for you </div>
          <div className="homepage-last-header-sponsored">Sponsored</div>
        </div>
        <div className="homepage-last-grid">
          <div className="homepage-last-1">
            <div className="homepage-last-img-1">
              <img src={HompageLast1} alt="" />
            </div>
            <div className="sec4decs-1">
              <span>Dell - Inspiron 2-in-1 16” FHD+ Touch Laptop – 12th Gen Intel Evo i7 – 16GB Memory – 512GB SSD - Platinum Silver</span>
              <span><IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> (619)</span>
              <span>Clearance</span>
              <span>$699.99</span>
            </div>
          </div>
          <div className="homepage-last-2">
            <div className="homepage-last-img-1">
              <img src={HompageLast2} alt="" />
            </div>
            <div className="sec4decs-1">
              <span>Dell - Inspiron 2-in-1 16” FHD+ Touch Laptop – 12th Gen Intel Evo i7 – 16GB Memory – 512GB SSD - Platinum Silver</span>
              <span><IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> (619)</span>
              <span>Clearance</span>
              <span>$699.99</span>
            </div>
          </div>
          <div className="homepage-last-3">
            <div className="homepage-last-img-1">
              <img src={HompageLast3} alt="" />
            </div>
            <div className="sec4decs-1">
              <span>Dell - Inspiron 2-in-1 16” FHD+ Touch Laptop – 12th Gen Intel Evo i7 – 16GB Memory – 512GB SSD - Platinum Silver</span>
              <span><IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> (619)</span>
              <span>Clearance</span>
              <span>$699.99</span>
            </div>
          </div>
          <div className="homepage-last-4">
            <div className="homepage-last-img-4">
              <img src={HompageLast4} alt="" />
            </div>
            <div className="sec4decs-1">
              <span>Dell - Inspiron 2-in-1 16” FHD+ Touch Laptop – 12th Gen Intel Evo i7 – 16GB Memory – 512GB SSD - Platinum Silver</span>
              <span><IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> (619)</span>
              <span>Clearance</span>
              <span>$699.99</span>
            </div>
          </div>
          <div className="homepage-last-5">
            <div className="homepage-last-img-5">
              <img src={HompageLast5} alt="" />
            </div>
            <div className="sec4decs-1">
              <span>Dell - Inspiron 2-in-1 16” FHD+ Touch Laptop – 12th Gen Intel Evo i7 – 16GB Memory – 512GB SSD - Platinum Silver</span>
              <span><IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> (619)</span>
              <span>Clearance</span>
              <span>$699.99</span>
            </div>
          </div>
          <div className="homepage-last-6">
            <div className="homepage-last-img-1">
              <img src={HompageLast6} alt="" />
            </div>
            <div className="sec4decs-1">
              <span className="homepage-last-desc-1">Dell - Inspiron 2-in-1 16” FHD+ Touch Laptop – 12th Gen Intel Evo i7 – 16GB Memory – 512GB SSD - Platinum Silver</span>
              <span><IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> (619)</span>
              <span>Clearance</span>
              <span>$699.99</span>
            </div>
          </div>
        </div>

      </div>
      <Footer />




    </div >
  )
}

export default Homepage
