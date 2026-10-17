import './App.css'
import anteater from './anteater-studying.png'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebookSquare } from 'react-icons/fa'

function Login() {
  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <label>Username:</label>
          <input type="text" />

          <label>Password:</label>
          <input type="password" />

          <label>
            <input type="checkbox" />
            Remember me
          </label>

          <button type="submit">Log in</button>
        </form>

        <div className="divider">
          <span>or</span>
        </div>

        <div className="social">
          <button className="social-button"><FcGoogle /></button>
          <button className="social-button"><FaFacebookSquare color="#3b5998" /></button>
        </div>

        <button className="signup-button">Sign Up</button>
      </div>

      <div className="welcome">
        <h1>
          Welcome to
          <span>ZotStudy</span>
        </h1>
        <p>Connect and study with other Anteaters!</p>
        <img src={anteater} alt="Anteater studying" />
      </div>
    </div>
  )
}

export default Login