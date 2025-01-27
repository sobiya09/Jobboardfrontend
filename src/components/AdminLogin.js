import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="text-center mb-4">Admin Login</h2>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="form-control"
                  placeholder="Enter username"
                  value={credentials.username}
                  onChange={(e) =>
                    setCredentials({ ...credentials, username: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={credentials.password}
                  onChange={(e) =>
                    setCredentials({ ...credentials, password: e.target.value })
                  }
                />
              </div>
              {error && (
                <div className="alert alert-danger text-center" role="alert">
                  {error}
                </div>
              )}
              <button
                className="btn btn-primary w-100"
                onClick={handleLogin}
                disabled={loading}
              >
                {loading ? (
                  <span className="spinner-border spinner-border-sm"></span>
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;

