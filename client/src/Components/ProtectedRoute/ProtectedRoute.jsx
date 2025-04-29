import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext.jsx';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!isAuthenticated) {
    navigate('/login');
  }

  return children;
};

export default ProtectedRoute;
