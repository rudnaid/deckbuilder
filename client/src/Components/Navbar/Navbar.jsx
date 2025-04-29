import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext.jsx';
import './Navbar.css';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">

      <div className="navbar-brand">
        <Link to="/">Deck Builder</Link>
      </div>

      <div className="navbar-auth">
        {isAuthenticated ? (
          <>
            <span className="navbar-username">Hello, {user?.username || 'User'}</span>
            <button className="navbar-button" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="navbar-item">Login</Link>
            <Link to="/register" className="navbar-item">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
