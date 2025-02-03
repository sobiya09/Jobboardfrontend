import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaUserShield } from "react-icons/fa"; // Import admin icon

function UserLogin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setLoading(true);
    setError("");
    axios
      .post("http://127.0.0.1:8000/api/token/", credentials)
      .then((response) => {
        localStorage.setItem("access_token", response.data.access);
        localStorage.setItem("refresh_token", response.data.refresh);
        alert("Login successful");
        navigate("/admin");
      })
      .catch((err) => {
        setError("Invalid credentials");
        console.error("Login failed", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 " 
    style={{
      background:"rgba(2, 3, 40, 0.97)",
    }}>
      <div className="card shadow-lg p-4 rounded" style={{ width: "400px" }}>
        <div className="text-center">
          <FaUserShield size={100} className="text-primary mb-3"  />
          {/* <h2 className="mb-3">Admin Login</h2> */}
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label fw-bold">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="form-control"
            placeholder="Enter username"
            value={credentials.username}
            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label fw-bold">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Enter password"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          />
        </div>
        {error && <div className="alert alert-danger text-center">{error}</div>}
        <button className="btn btn-primary w-100 fw-bold" style={{
      background:"rgba(2, 3, 40, 0.97)",
    }} onClick={handleLogin} disabled={loading}>
          {loading ? <span className="spinner-border spinner-border-sm"></span> : "Login"}
        </button>
      </div>
    </div>
  );
}

export default UserLogin;
