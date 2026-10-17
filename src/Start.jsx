
import './Start.css'
import anteater from './anteaterstudying.png'
import { useNavigate } from 'react-router-dom'

function Start() {
  const navigate = useNavigate()

  return (
    <div className="start-page">
      <header className="start-navbar">
        <div className="start-logo">
          Zot<span>Study</span>
        </div>

        <div className="start-nav-buttons">
          <button
            className="start-login-btn"
            onClick={() => navigate('/login')}
          >
            Log In
          </button>

          <button
            className="start-signup-btn"
            onClick={() => navigate('/signup')}
          >
            Sign Up
          </button>
        </div>
      </header>

      <main className="start-hero">
        <div className="start-hero-text">
          <div className="start-tag">
            Made for UCI Anteaters
          </div>

          <h1>
            Study with Your
            <br />
            <span>Fellow Anteaters</span>
            <br />
            at UCI.
          </h1>

          <p>
            Meet students in your courses, find study
            buddies, and make studying better together.
          </p>

          <div className="start-features">
            <div>✓ Find study buddies in your classes</div>
            <div>✓ Connect with fellow Anteaters</div>
            <div>✓ Study smarter, together</div>
          </div>

          <button
            className="start-get-started"
            onClick={() => navigate('/login')}
          >
            Get Started →
          </button>
        </div>

        <div className="start-hero-image">
          <img
            src={anteater}
            alt="Anteater studying"
          />
        </div>
      </main>
    </div>
  )
}

export default Start
