import { Link } from 'react-router-dom';
import './Admin.css';

function DashBoardNav() {
 
  return (
    <div className='dashboard-container'>
      <nav>
        <div className="navheader">
          <h2>DashBoard</h2>
        </div>
        <ul>
          <li><Link to="/AdminPage">Home</Link></li>
          <li><Link to="/DashBoardProduct">Product</Link></li>
          <li><Link to="/DashBoardUsers">User</Link></li>
          <li><Link to="/CreateProductPage">Create Product</Link></li>
          <li><Link to="/CreateUserPage">Create User</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default DashBoardNav;
