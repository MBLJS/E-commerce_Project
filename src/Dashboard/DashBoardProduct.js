import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RiPencilFill, RiDeleteBin6Fill } from 'react-icons/ri';
import './Admin.css';
import DashBoardNav from './DashbordNav';

function DashBoardProduct() {
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

  const handleDelete = (productId) => {
    fetch(`http://159.65.21.42:9000/product/${productId}`, {
      method: 'DELETE',
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log('Product deleted:', data);
        getProduct();
      });
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="Admin-con">
      <DashBoardNav />
      <main className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product._id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
            <div className="product-details">
              <p>Category: {product.category}</p>
              <p>Price: {product.price}</p>
              <p>Quantity: {product.quantity}</p>
            </div>
            <div className="product-actions">
              <button>
                <RiPencilFill size={25} /> Edit
              </button>
              <button onClick={() => handleDelete(product._id)}>
                <RiDeleteBin6Fill size={25} /> Delete
              </button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default DashBoardProduct;
