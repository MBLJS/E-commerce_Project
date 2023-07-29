import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RiBellFill, RiMailFill, RiPencilFill, RiDeleteBin6Fill } from 'react-icons/ri';
import { IoMdCart } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa';
import { BsBellFill, BsFillBoxFill } from "react-icons/bs";
import "./Admin.css";
import DashBoardNav from './DashbordNav';
import { useContext } from "react";
import { ProductContext } from "../Contexts/ProductContext";




function Admin() {
  const contextData = useContext(ProductContext);
  const { cart } = contextData;
  const [totalUsers, setTotalUsers] = useState(0);

  const [products, setProducts] = useState([]);
  const filteredProducts = products.filter((product) => product.category === 'muhammed');
  const getProduct = () => {
    fetch("http://159.65.21.42:9000/products")
      .then((resp) => resp.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  };

  const handleDelete = (productId) => {
    fetch(`http://159.65.21.42:9000/product/${productId}`, {
      method: 'DELETE'
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log('Product deleted:', data);
        getProduct();
      })
  };

  useEffect(() => {
    getProduct();
  }, []);


  const getTotalUsers = () => {
    fetch("http://159.65.21.42:9000/users")
      .then((resp) => resp.json())
      .then((data) => {
        setTotalUsers(data.length);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  };

  useEffect(() => {
    getProduct();
    getTotalUsers();
  }, []);












  return (
    <div className="Admin-con">
      <DashBoardNav />
      <main>
        <div className="topMain">
          <div className="Admin">
            <h2>Admin</h2>
          </div>
          <div className="admin-icon">
            <Link to="#"><BsBellFill size={25} /></Link>
            <Link to="#"><RiMailFill size={25} /></Link>
            <div className="user-img">
              <Link><FaUserCircle size={25} /></Link>
            </div>
            <span>Suleiman</span>
          </div>
        </div>

        <div className="counter">
          <div className="count1">
            <BsFillBoxFill size={60} />
            <div className="count1-value">
              <span>Total Product</span>
              <p>{products.length}</p>
            </div>
          </div>

          <div className="count2">
            <FaUserCircle size={60} />
            <div className="count2-value">
              <span>Total User</span>
              <p>{totalUsers}</p>
            </div>
          </div>

          <div className="count3">
            <IoMdCart size={60} />
            <div className="count3-value">
              <span>Product in Cart</span>
              <p>{cart.length}</p>
            </div>
          </div>
        </div>
        <hr className='admin-hr' />

        <table className="my-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Description</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.description}</td>
                <td>
                  <button>
                    <RiPencilFill size={25} />
                  </button>
                </td>
                <td>
                  <button onClick={() => handleDelete(product._id)}>
                    <RiDeleteBin6Fill size={25} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default Admin;
