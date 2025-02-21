import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import dashboardImage from "./images/auction.jpg";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm p-3 fixed-top">
    <div className="container">
      <Link className="navbar-brand fw-bold" to="/">Auction App</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link text-light fw-semibold" to="/dashboard">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light fw-semibold" to="/signup">Signup</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light fw-semibold" to="/signin">Signin</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light fw-semibold" to="/post-auction">Post Auction</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

const PageContainer = ({ title, children, image }) => (
  <div className="container mt-5 pt-5">
    <div className="card shadow-lg border-0 p-4">
      <h2 className="text-center text-primary fw-bold mb-4">{title}</h2>
      {image && <img src={image} alt={title} className="img-fluid rounded mb-4" />}
      {children}
    </div>
  </div>
);

const Dashboard = () => (
  <PageContainer title="Dashboard">
    <h1 className="text-center">Welcome to the auction dashboard.</h1>
    <img src={dashboardImage} style={{ width: "50%", height: "300px", borderRadius: "10px", margin: "0 auto", display: "block" }}></img>
  </PageContainer>
);

const Signin = () => (
  <PageContainer title="Signin">
    <form>
      <div className="mb-3">
        <label className="form-label">Username</label>
        <input type="text" className="form-control" placeholder="Enter username" />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input type="password" className="form-control" placeholder="Enter password" />
      </div>
      <button type="submit" className="btn btn-primary w-100">Signin</button>
    </form>
  </PageContainer>
);

const Signup = () => {
  const [alert, setAlert] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setAlert("Signup successful! You can now log in.");
  };

  return (
    <PageContainer title="Signup">
      {alert && <div className="alert alert-success">{alert}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input type="text" className="form-control" placeholder="Enter username" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" placeholder="Enter email" />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" placeholder="Enter password" />
        </div>
        <button type="submit" className="btn btn-primary w-100">Signup</button>
      </form>
    </PageContainer>
  );
};

const PostAuction = () => (
  <PageContainer title="Post Auction">
    <form>
      <div className="mb-3">
        <label className="form-label">Item Name</label>
        <input type="text" className="form-control" placeholder="Enter item name" />
      </div>
      <div className="mb-3">
        <label className="form-label">Starting Bid</label>
        <input type="number" className="form-control" placeholder="Enter starting bid" />
      </div>
      <button type="submit" className="btn btn-primary w-100">Post Auction</button>
    </form>
  </PageContainer>
);

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/post-auction" element={<PostAuction />} />
      <Route path="/" element={<Dashboard />} />
    </Routes>
  </Router>
);

export default App;