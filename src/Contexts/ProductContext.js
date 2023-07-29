import React, { useState, createContext, useEffect } from "react";

export const ProductContext = createContext();

function ProductProvider(props) {
  const [cart, setCart] = useState([]);
  const productStorageCart = JSON.parse(localStorage.getItem("MuhammedStorage"));


  useEffect(() => {

    if (productStorageCart) {
      setCart(productStorageCart);
    }

  }, []);

  return (
    <ProductContext.Provider value={{ cart, setCart }}>
      {props.children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
