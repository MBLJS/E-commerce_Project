import { IoCart, IoChevronDown, IoChevronForward, IoPersonCircleOutline } from "react-icons/io5";
import Navigation1 from "../Components/Navigation1";
import Navigation2 from "../Components/Navigation2";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import image1 from '../Components/images/singleProductHover1.jpg';
import image2 from '../Components/images/singleProductHover2.jpg';
import image3 from '../Components/images/singleProductHover3.jpg';
import image4 from '../Components/images/singleProductHover4.jpg';
import image5 from '../Components/images/singleProductHover5.jpg';
import image6 from '../Components/images/singleProductHover6.jpg';
import image7 from '../Components/images/singleProductHover7.jpg';
import image8 from '../Components/images/singleProductHover8.jpg';
import image9 from '../Components/images/singleProductHover9.jpg';
import s1 from '../Components/images/s1.jpg';
import s2 from '../Components/images/s2.jpg';
import s3 from '../Components/images/s3.jpg';
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
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { ProductContext } from "../Contexts/ProductContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function SingleProduct() {
  const { _id } = useParams();
  const [product, setProduct] = useState({});
  const contextData = useContext(ProductContext);
  const { cart, setCart } = contextData;


  const getProduct = () => {
    fetch(`http://159.65.21.42:9000/product/${_id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setProduct(data);
      });
  };

  useEffect(() => {
    getProduct();
  }, []);


  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ];

  const handleImageHover = (index) => {
    setCurrentImage(index);
  };


  const handleCart = (product) => {
    const existingCartData = [...cart];
    const checkIfItemExist = existingCartData.find((item) => item._id === product._id);
    if (checkIfItemExist) {
      alert("Item is already in the cart");
      return;
    }
  
    const newItem = { ...product, quantity: 1, totalPrice: product.price };
    existingCartData.push(newItem);
    setCart(existingCartData);
    localStorage.setItem("MuhammedStorage", JSON.stringify(existingCartData));
  };
  















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

      <hr className="singleproductHr" />

      <div className="sigleproduct-main">
        <div className="singleproduct-main-flex">
          <div className="singleproduct-flex1">
            <div className="productname">
              <h1>
                {product.description}
              </h1>
            </div>

            <div className="data-section">
              <div className="model product-data">
                <span className="product-data-label body-copy"><strong>Model</strong>:</span>
                <span className="product-data-value body-copy">100L9G-CINE100 </span>
              </div>
              <div className="sku product-data">
                <span className="product-data-label body-copy"><strong>SKU</strong>:</span>
                <span className="product-data-value body-copy">6485138 </span>
              </div>
            </div>

            <div className="singleproduct-review">
              <ul className="singleproduct-star">
                <li>
                  <span>
                    ⭐⭐⭐⭐⭐ <strong>4.5</strong> (21 Review) <IoChevronDown />
                  </span>
                </li>
                <li>
                  <span>
                    16 Answered Questions
                  </span>
                </li>
              </ul>
            </div>

            <div className="singleproduct-highlyRate">
              <p>Highly rated by customer for: <span>Picture quality, set up, sound quality <IoChevronDown /></span></p>
            </div>

            <div className="media-gallery-base-flex">
              <div className="imagetoseect">
                <div className="product-image-slider">
                  <div className="slider-thumbnails">
                    {images.map((image, index) => (
                      <div className="thumborder" key={index}>
                        <img
                          src={image}
                          alt={`Thumbnail ${index}`}
                          className={`thumbnail ${currentImage === index ? 'active' : ''}`}
                          onMouseEnter={() => handleImageHover(index)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="main-container">
                    <img src={product.image} alt="Product" className="main-image" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="singleproduct-flex2">
            <div className="price-flex">
              <div>
                <div className="priceView-hero-price">
                  <span>₦{product.price}</span>
                </div>
                <div className="single-promo-red">Save $2,175</div>
                <div className="pricing-price__regular-price">
                  Was $5,499.99
                </div>
              </div>
              or
              <div>
                <div className="total-cost-clarity-content__monthly-payment">
                  <strong>$138.55</strong>
                  <span>
                    /mo.<span>*</span>
                  </span>
                </div>
                <div className="total-cost-clarity-content">
                  suggested payments with <br />
                  <strong>24-Month Financing</strong>
                </div>
                <div className="singleshowmore">
                  <Link>show me more <IoChevronForward /></Link>
                </div>
              </div>
            </div>


            <div className="deals-wrapper-single" >
              <h2 className="header-text">Deals on related items:</h2>
              <div className="deals-container-wrapper">
                <div className="deals-container campaignDeals">
                  <p>
                    <div className="deals-image-wrapper">
                      <img alt="4th of July 5-Day Sale" className="deal-image" src={s1} />
                    </div>
                    <div className="deal-name">4th of July 5-Day Sale</div>
                  </p>
                </div>
                <div className="deals-container currentDeals">
                  <p>
                    <div className="deals-image-wrapper">
                      <img alt="Projectors deals" className="deal-image" src={s2} />
                    </div>
                    <div className="deal-name">Projectors deals</div>
                  </p>
                </div>
                <div className="deals-container outletDeals">
                  <p>
                    <div className="deals-image-wrapper">
                      <img alt="Outlet Deals" className="deal-image" src={s3} />
                    </div>
                    <div className="deal-name">Outlet Deals</div>
                  </p>
                </div>
              </div>
            </div>



            <div className="deals-wrapper-single" >
              <h2 className="header-text">Maximum Viewable Screen Size:</h2>
              <div className="deals-container-wrapper">
                <select>
                  <option value='100"'>100" </option>
                  <option value='120"'>120" </option>
                </select>
              </div>
            </div>


            <div className="deals-wrapper-single" >
              <h2 className="header-text-protect">protect your project</h2>
              ⭐⭐⭐⭐⭐(73)

              <div className="www">
                <IoPersonCircleOutline /> 88% of reviewers would recommend Geek Squad Protection
              </div>

              <div className="check-4">
                <input type="checkbox" /> 4-Year Standard Geek Squad Protection
              </div>
            </div>

            <div className="deals-wrapper-single" >
              <h4>Availability</h4>

              <div className=" dot-single">
                <div className="border-dashed">
                  <div>
                    <svg className="dot-svg" ></svg>
                  </div>
                  <strong className="dot-strong">Pickup</strong>
                  <p className="dot-p">
                    Unavailable at <strong>Hato Rey</strong>
                  </p>
                </div>
                <div class="  border-dashed">
                  <div>
                    <svg className="dot-svg"></svg>
                  </div>
                  <strong className="dot-strong">Delivery</strong>
                  <p className="dot-p">
                    Unavailable to 00820<strong></strong>
                  </p>
                </div>
              </div>

              <div className="ffff">
                <h4>Pickup unavailable within 250 miles of Hato Rey</h4>
              </div>
            </div>

            <div className="deals-wrapper-single" >
              <Link onClick={() => handleCart(product)}>
                <IoCart />
                Add to Cart
              </Link>

              <div className="secondLinkbtn">
                <Link>
                  Complete Your Solution
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="deals-inspired">
        <h2>
          <span>More to Consider</span>
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
                <span> ⭐⭐⭐⭐⭐(16.047)</span>
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
                <span>⭐⭐⭐⭐⭐(877)</span>
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
                <span>⭐⭐⭐⭐⭐(15)</span>
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
                <span>⭐⭐⭐⭐⭐(231)</span>
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
                <span>⭐⭐⭐⭐⭐(43,80)</span>
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
                <span>⭐⭐⭐⭐⭐(43,80)</span>
                <span>$449.99</span>
                <span>$59.99</span>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      <div className="single-input-big">
        <select>
          <option>Overview</option>
        </select>
        <select>
          <option>Specifications</option>
        </select>
        <select>
          <option>Compare Similar Items</option>
        </select>
        <select>
          <option>Reviews⭐⭐⭐⭐⭐(21)</option>
        </select>
        <select>
          <option>Questions & Answers
            (18)
          </option>
        </select>
        <select>
          <option>From the Manufacturer</option>
        </select>
      </div>
      <Footer />
    </div>
  );
}

export default SingleProduct;
