import  { useState } from 'react';
import DashBoardNav from './DashbordNav';

function CreateUserPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);



  const handleSubmitUser = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || phone === "" || password === "") {
      setErr(true);
      return;
    }

    let users = {
      name: name,
      email: email,
      phone: phone,
      password: password,
      date: new Date().toLocaleString(),
    };

    fetch("http://159.65.21.42:9000/register", {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(users),
  })
      .then((resp) => resp.json())
      .then((contact) => {
          alert("User Created");
          console.log(contact);
      })
      .catch((err) => console.log(err));
  }




  return (
    <div className="create-user-container">
      <DashBoardNav />
        <div className="form-container">
          <h2>Create User</h2>
          <form className="create-user-form" onSubmit={handleSubmitUser}>
            <div className="form-group">
              <label htmlFor="Full Name">Full Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input-field"
              />
              {err && name === "" && <span>FullName Required</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
              />
              {err && email === "" && <span>Email Required</span>}
            </div>
            <div className="form-group">
              <label htmlFor="Phone Number">Phone Number:</label>
              <input
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="input-field"
              />
              {err && phone === "" && <span>Phone Number Required</span>}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
              />
              {err && password === "" && <span>Password Required</span>}
            </div>
            <button type="submit" className="submit-btn">Create User</button>
          </form>
        </div>
    </div>
  );
}

export default CreateUserPage;
