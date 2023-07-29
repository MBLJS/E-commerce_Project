import React, { useState } from 'react';
import DashBoardNav from './DashbordNav';

function CreateProductPage() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [err, setErr] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || category === "" || price === "" || quantity === "" || description === "" || image === "") {
      setErr(true);
      return;
    }
    let product = {
      name: name,
      category: category,
      price: price,
      quantity: quantity,
      description: description,
      image: image,
      date: new Date().toLocaleString()
    };

    fetch("http://159.65.21.42:9000/create/product", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((resp) => resp.json())
      .then((data) => {
        alert("Product Created");
        console.log(data);
      });
  };

  return (
    <div className="create-product-container">
      <DashBoardNav />
      <main>
        <div className="form-container">
          <h2>Create Product</h2>
          <form className="create-product-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input-field"
              />
              {err && name === "" && <span>Name Required</span>}
            </div>
            <div className="form-group">
              <label htmlFor="category">Category:</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="input-field"
              >
                <option value="" hidden>Select Category</option>
                <option value="muhammed">Muhammed</option>
                <option value="segee">segee</option>
              </select>
              {err && category === "" && <span>Category Required</span>}
            </div>
            <div className="form-group">
              <label htmlFor="price">Price:</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="input-field"
              />
              {err && price === "" && <span>Price Required</span>}
            </div>
            <div className="form-group">
              <label htmlFor="quantity">Quantity:</label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="input-field"
              />
              {err && quantity === "" && <span>Quantity Required</span>}
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="input-field"
              ></textarea>
              {err && description === "" && <span>Description Required</span>}
            </div>
            <div className="form-group">
              <label htmlFor="image">Image:</label>
              <input
                type="file"
                onChange={handleFileChange}
                className="input-field"
              />
              {err && image === "" && <span>Image Required</span>}
            </div>
            <button type="submit" className="submit-btn">Create Product</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default CreateProductPage;
