// src/components/Home.jsx
import React from "react";
import "../styles/home.css";
import Header from './Header'
import outlineLogo from "../assets/img/logos/Kyfaru Logo Outline-05.png";

const Home = () => {
  return (
    <div>
      <Header />
      
      <section className="home" id="home">
        <div className="home-content">
          <h1>Welcome to Kyfaru</h1>
          <h3>Innovative Solutions for a Digital World</h3>
          <p>
            At Kyfaru, we specialize in delivering cutting-edge technology solutions
            that empower businesses to thrive in the digital age. Our team of experts
            is dedicated to providing innovative services tailored to meet your unique needs.
          </p>
          <div className="btn-container">
            <a href="#" className="btn btn-load">About Us</a>
            <a href="#" className="btn btn-load">Our Services</a>
          </div>
        </div>

        <div className="image">
          <img src={outlineLogo} alt="Kyfaru Logo Outline" />
        </div>
      </section>
    </div>
  );
};

export default Home;
