import { Link } from 'react-router-dom';
import { useAuth } from '../../Hooks/useAuth';
import './HomePage.css';

function HomePage() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to Hearthstone Deck Builder</h1>
        <p className="home-subtitle">Craft powerful decks and dominate the battlefield</p>
        
        <div className="home-features">
          <div className="feature-card">
            <h3>Build Custom Decks</h3>
            <p>Create powerful combinations with our intuitive deck builder interface. Experiment with different classes and strategies.</p>
          </div>
          <div className="feature-card">
            <h3>Browse All Cards</h3>
            <p>Explore the entire Hearthstone card collection with powerful filtering options to find exactly what you need.</p>
          </div>
          <div className="feature-card">
            <h3>Save & Share</h3>
            <p>Store your favorite decks to your collection and share them with other players around the world.</p>
          </div>
        </div>

        {!isAuthenticated && (
          <div className="home-cta">
            <Link to="/register" className="btn btn-primary">Start Building</Link>
            <Link to="/login" className="btn btn-secondary">Login</Link>
          </div>
        )}

        {isAuthenticated && (
          <div className="home-cta">
            <Link to="/deckbuilder" className="btn btn-primary">Go to Deck Builder</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
