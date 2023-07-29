import Navigation1 from "../Components/Navigation1";
import Navigation2 from "../Components/Navigation2";
import { Link } from "react-router-dom";
import { IoBookmarkOutline, IoChevronUp, IoCart, IoStar } from "react-icons/io5";
import HomeTv1 from "../Components/images/HomeTv1.jpg";
import HomeTv2 from "../Components/images/HomeTv2.jpg";
import HomeTv3 from "../Components/images/HomeTV3.jpg";
import HomeTv4 from "../Components/images/HomeTv4.jpg";
import HomeTv5 from "../Components/images/HomeTv5.jpg";
import HomeTv6 from "../Components/images/HomeLive.jpg";
import HomepageGame from "../Components/images/HompageGame.jpg";
import HomeLive from "../Components/images/HomeLive.jpg";
import HomeTv11 from "../Components/images/HomeTv11.jpg";
import HomeTv12 from "../Components/images/HomepageTv12.jpg";
import HomepageHook from "../Components/images/HompageHook.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Footer from "../Components/Footer";


import { useContext } from "react";
import { ProductContext } from "../Contexts/ProductContext";



function Cart() {

  const ContextData = useContext(ProductContext);
  const { cart, setCart } = ContextData;
  const updateCartItemQuantity = (cartProduct, newQuantity) => {
    const existingCartData = [...cart];
    const updatedCartData = existingCartData.map((item) => {
      if (item._id === cartProduct._id) {
        item.quantity = newQuantity;
        item.totalPrice = item.price * newQuantity;
      }
      return item;
    });
    setCart(updatedCartData);
    localStorage.setItem("MuhammedStorage", JSON.stringify(updatedCartData));
  };


  const increaseCartItem = (menu, newQuantity) => {
    const existingCartData = [...cart];
    const increaseQty = existingCartData.map((item) => {
      if (item._id === menu._id) {
        item.quantity += newQuantity;
        item.totalPrice = item.price * item.quantity;
      }
      return item;
    });
    setCart(increaseQty);
    localStorage.setItem("Chop&Grill", JSON.stringify(increaseQty));
  };



  const decreaseCartItem = (menu, newQuantity) => {
    const existingCartData = [...cart];
    const decreaseQty = existingCartData.map((items) => {
      if (items._id === menu._id) {
        if (menu.quantity > 1) {
          menu.quantity -= 1;
          menu.totalPrice = menu.price * menu.quantity;
        }
      }
      return items;
    });
    setCart(decreaseQty);
    localStorage.setItem("MuhammedStorage", JSON.stringify(decreaseQty));
  };

  const grandTotal = cart
    .map((item) => item.totalPrice)
    .reduce((a, b) => {
      return a + b;
    }, 0)

  const removeFromCart = (cartProduct) => {
    const updatedCartData = cart.filter((item) => item._id !== cartProduct._id);
    setCart(updatedCartData);
    localStorage.setItem("MuhammedStorage", JSON.stringify(updatedCartData));
  };


  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
  };



  return (
    <div>
      <Navigation1 />
      <Navigation2 />

      <div className="cart-page-flex">
        <section className="large-content">
          {/* <div className="cart-page-heading">
            <div className="cart-page-title">
              <h1>Your cart is empty</h1>
              <div className="cart-page-tittle-flex">
                <div className="cart-page-tittle-subHeader">
                  <span>Have an account</span>
                  <Link to="/signIn">Sign in to see your cart</Link>
                </div>
              </div>
            </div>
          </div> */}


          {cart.length ? (
            cart.map((item) => (
              <section className="cart-card">
                <div className="activity-in-cart">
                  <div className="activity-in-cart-border">
                    <div className="fluid-item-flex">
                      <div className="fluid-item_details">
                        <div className="fluid-item-1-flex">
                          <div className="fluid-item-image">
                            <img src={item.image} alt="" />
                          </div>
                          <div className="fluid-item-title">
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </div>

                      <div className="fluid-item_availabilty">
                        <div className="fluid-item_availabilty-check1">
                          <input type="checkbox" />
                          <p>Unavailable within 250 miles of Hato ReyHato Rey <br />
                            Unavailable at this store. Please check other stores</p>
                        </div>

                        <div className="fluid-item_availabilty-check2">
                          <input type="checkbox" />
                          <p><strong>Shipping to</strong>00820 <br />
                            Unavailable in this area</p>
                        </div>
                      </div>


                      <div className="fluid-item_availabilty">
                        <div >
                          <div className="tb-select-wrapper ">
                            <select
                              onChange={(e) => {
                                const newQuantity = parseInt(e.target.value);
                                if (newQuantity > item.quantity) {
                                  increaseCartItem(item, newQuantity - item.quantity);
                                } else if (newQuantity < item.quantity) {
                                  decreaseCartItem(item, item.quantity - newQuantity);
                                }
                              }}
                              className="tb-select"
                            >
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                            </select>
                          </div>
                        </div>
                        <div className="tb-btn">
                          <button onClick={() => removeFromCart(item)}>Remove</button>
                          <button>Save</button>
                        </div>

                      </div>

                      <div className="fluid-item__price">
                        <div className="text-right">
                          <div className="price-block">
                            <span className="sr-only">Price</span>
                            <div className="price-block__primary-price">₦{item.price}</div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </section>
            ))
          ) : (
            <p className="no-items">No items currently in the cart</p>
          )}

          {/* <section className="cart-card">
            <div className="activity-in-cart">
              <div className="activity-in-cart-border">
                <div className="fluid-item-flex">
                  <div className="fluid-item_details">
                    <div className="fluid-item-1-flex">
                      <div className="fluid-item-image">
                        <img src={HomeTv1} alt="" />
                      </div>
                      <div className="fluid-item-title">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                      </div>
                    </div>
                  </div>

                  <div className="fluid-item_availabilty">
                    <div className="fluid-item_availabilty-check1">
                      <input type="checkbox" />
                      <p>Unavailable within 250 miles of Hato ReyHato Rey <br />
                        Unavailable at this store. Please check other stores</p>
                    </div>

                    <div className="fluid-item_availabilty-check2">
                      <input type="checkbox" />
                      <p><strong>Shipping to</strong>00820 <br />
                        Unavailable in this area</p>
                    </div>
                  </div>


                  <div className="fluid-item_availabilty">
                    <div >
                      <div className="tb-select-wrapper ">
                        <select className="tb-select" >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>
                    </div>
                    <div className="tb-btn">
                      <button>Remove</button>
                      <button>Save</button>
                    </div>
                  </div>

                  <div className="fluid-item__price">
                    <div className="text-right">
                      <div className="price-block">
                        <span className="sr-only">Price</span>
                        <div className="price-block__primary-price">$949.99</div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section> */}

          <section className="cart-card">
            <div className="activity-in-cart">
              <div className="activity-in-cart-border">
                <button className="activity-in-cart-button-flex">
                  <div>
                    <IoBookmarkOutline />
                    <h2>Saved Item</h2>
                  </div>
                  <IoChevronUp />
                </button>
              </div>

              <div className="cart-show-hide">
                <div className="cart-show-flex">
                  <div className="zero-state">
                    <h3>Your list is currently empty</h3>
                    <p>Need inspiration? check out <Link>recommended items</Link>, or search for items to save</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="cart-recently-viewed">
            <div className="cart-recently-viewed-back">
              <div className="cart-recently-viewed-header">
                <h2>
                  <span>You recently Viewed</span>
                  <span>(3 item)</span>
                </h2>
              </div>
              <div className="cart-recently-viewed-product">
                <div className="cart-recently-viewed-product-flex">
                  <div className="cart-recently-viewed-product1-flex-colum">
                    <div>
                      <img src={HomeTv5} alt="" />
                    </div>
                    <Link>
                      <p className="cart-recently-viewed-product-name">Toshiba - 75" Class C
                        350 Series LED 4K UHD Smart Fire TV</p>
                    </Link>
                    <span className="barr"><IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> (485)</span>
                    <p>$529.99</p>
                    <p className="cross">$799.99</p>
                    <button className="add-to-cart-flex">
                      <IoCart />
                      <span>Add to cart</span>
                    </button>
                  </div>
                  <div className="cart-recently-viewed-product2-flex-colum">
                    <div>
                      <img src={HomeTv3} alt="" />
                    </div>
                    <Link>
                      <p className="cart-recently-viewed-product-name">MacBook Air 13.3" Laptop - Apple M1 chip - 8GB Memory - 256GB SSD - Space Gray</p>
                    </Link>
                    <span className="barr"><IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> (16.082)</span>
                    <p>$799.99</p>
                    <p className="cross">$999.99</p>
                    <button className="add-to-cart-flex">
                      <IoCart />
                      <span>Add to cart</span>
                    </button>
                  </div>
                  <div className="cart-recently-viewed-product3-flex-colum">
                    <div>
                      <img src={HomeTv6} alt="" />
                    </div>
                    <Link>
                      <p className="cart-recently-viewed-product-name">Apple - MacBook Air 15" Laptop - M2 chip - 8GB Memory - 256GB SSD (Latest Model) - Midnight</p>
                    </Link>
                    <span className="barr"><IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> <IoStar className="star" /> (20)</span>
                    <p>$1,299.00</p>
                    <button className="add-to-cart-flex">
                      <IoCart />
                      <span>Add to cart</span>
                    </button>

                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="cart-recently-viewed">
            <div className="cart-recently-viewed-back">
              <div className="cart-recently-viewed-header">
                <h2>
                  <span>Best-selling items</span>
                  <span>(6 item)</span>
                </h2>
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
              </div>
            </div>

          </div>
        </section>

        <section className="cart-sidebar-section">
          <div className="cart-sidebar">
            <div className="order-summary-flex">
              <h2>Order Summary</h2>
            </div>

            <div className="price-summary1">
              <div className="below-line1">
                <div className="below-line-total">
                  <span>Item Total</span>
                </div>
              </div>
              <div>₦{grandTotal}</div>
            </div>


            <div className="price-summary2">
              <div className="below-line2">
                <div className="below-line-total">
                  <span>Shipping</span>
                </div>
              </div>
              <div>FREE</div>
            </div>
            <div className="price-summary3">
              <div className="below-line3">
                <div className="below-line-total">
                  <span>Estimated Sales Tax</span>
                </div>
              </div>
              <div>$0.00</div>
            </div>

            <div className="price-summary">
              <div className="below-line">
                <div className="below-line-total">
                  <span>Total</span>
                </div>
              </div>
              <div>₦{grandTotal}</div>
            </div>

            <div className="checkout-buttons">
              <Link class="btn btn-secondary btn-block btn-lg" to="/">
                Check Out
              </Link>

            </div>
            <div className="lookkk">
              <h3>Looking for a lease </h3>
            </div>

          </div>
        </section>
      </div>
      {/* <img className="blue-assist-minimized-beacon-image" src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/blueassist-expert1-a2ffcdcd-d524-466a-bd8e-af5cd50109df.png" alt="Best Buy Help Human Beacon" title="Best Buy Help"></img> */}

      <Footer />
    </div>
  );
}

export default Cart;