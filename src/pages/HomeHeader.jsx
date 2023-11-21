import React from 'react';
import "../pages/HomeHeader.css";
const HomeHeader = () => {
  return (
    <div className='header'>
      <header>
        <div className="homeheader">
          <h1>INNOVATE HUB</h1>
        </div>
        <div className="homeheadera">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
          <a href="#">About Us</a>
          <a href="#">Blog</a>
          <a href="#">Contact Us</a>
          <a href="#">
            <button>LOGIN</button>
          </a>
        </div>
      </header>
      <main>
        <section className="hero">
          <h2>InnovateHub Marketing Agency</h2>
          <h3>We are available for Digital Marketing</h3>
          <p>
            Ready to take your digital marketing to the next level? Contact us
            today for a free consultation and let's discuss how we can help you
            achieve your online goals. We look forward to partnering with you on
            your digital marketing journey.
          </p>
          <a href="#" className="btn btn-primary">
            GET STARTED
          </a>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 INNOVATE HUB</p>
      </footer>
    </div>
  );
}

export default HomeHeader