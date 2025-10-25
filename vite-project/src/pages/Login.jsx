import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate, useLocation, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, signInWithGoogle, resetPassword } = useAuth(); 
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    try {
      await signInWithGoogle();
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message);
    }
  };

  const handleReset = async () => {
    if (!email) {
      return setError("Please enter your email for password reset.");
    }
    try {
      await resetPassword(email);
      setError("Check your inbox for password reset link.");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="mb-4">Log In</h2>
      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            required
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            required
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-success w-100 mb-2">
          Log In
        </button>
      </form>

      <button 
        onClick={handleGoogleLogin} 
        className="btn btn-outline-primary w-100 mb-2"
      >
        Sign in with Google
      </button>

      <div className="text-center mb-3">
        <button 
          onClick={handleReset} 
          className="btn btn-link"
        >
          Forgot Password?
        </button>
      </div>

      <div className="text-center">
        Don’t have an account? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;
