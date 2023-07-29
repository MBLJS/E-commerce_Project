import React, { useState, useEffect } from 'react';
import { RiPencilFill, RiDeleteBin6Fill } from 'react-icons/ri';
import "./Admin.css";
import DashBoardNav from './DashbordNav';

function DashBoardUsers() {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    fetch("http://159.65.21.42:9000/users")
      .then((resp) => resp.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  };

  const handleDelete = (userId) => {
    fetch(`http://159.65.21.42:9000/user/${userId}`, {
      method: 'DELETE',
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log('Product deleted:', data);
        getUsers();
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="Admin-con">
      <DashBoardNav />
      <div className='dashbordtable'>
        <table className="my-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Password</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((uservalue) => (
              <tr key={uservalue._id}>
                <td>{uservalue.name}</td>
                <td>{uservalue.email}</td>
                <td>{uservalue.phone}</td>
                <td>{uservalue.password}</td>
                <td>
                  <button>
                    <RiPencilFill size={25} />
                  </button>
                </td>
                <td>
                  <button onClick={() => handleDelete(uservalue._id)}>
                    <RiDeleteBin6Fill size={25} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DashBoardUsers;
