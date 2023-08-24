import React from "react";

import evryDay from '../assets//why-choose-us/24-hours.png'
import shop from '../assets//why-choose-us/shopping-cart.png'
import fast from '../assets//why-choose-us/fast.png'
import product from '../assets//why-choose-us/new-product.png'

export default function Home() {
  return (
    <>
      {/* Start Hero Section */}
      <div className="hero">
        <div class="custom-shape">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 220" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
          </svg>
        </div>
        <div className="container">
          <div className="hero-container">
            <div className="hero-content">
              <h1>The Best Painting Product Ever</h1>
              <p>These products is perfect for anyone who wants to create beautiful paintings.</p>
              <button className="btn">Shop Now</button>
            </div>
            <div className="hero-img">
              <img src="https://picsum.photos/600/300" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* End Hero Section */}

      {/* Start Product Section */}
      <div className="product-section">
        <div className="container">
          <div className="product-container">
            <div className="title">
              <h2>Our Best Products</h2>
            </div>
            <div className="product-content">
              <div className="card-content">
                <h3>Repellendus quidem.</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus ducimus nesciunt provident maxime totam itaque?</p>
                <button className="btn">
                  Explore
                  <div className="arrows">
                    <i class="fa-solid fa-arrow-right"></i>
                    <i class="fa-solid fa-arrow-right"></i>
                  </div>
                </button>
              </div>

              <div className="product-cards">
                <div className="card">
                  <img src="https://picsum.photos/300/400" alt="" />
                  <h3>Product Name</h3>
                  <p>Product Description</p>
                  <button className="btn">Shop Now</button>
                </div>
                <div className="card">
                  <img src="https://picsum.photos/300/400" alt="" />
                  <h3>Product Name</h3>
                  <p>Product Description</p>
                  <button className="btn">Shop Now</button>
                </div>
                <div className="card">
                  <img src="https://picsum.photos/300/400" alt="" />
                  <h3>Product Name</h3>
                  <p>Product Description</p>
                  <button className="btn">Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Product Section */}

      {/* Start why Choose us Section */}
      <div className="why-choose-us">
        <div className="container">
          <div className="why-choose-us-container">
            <div className="title">
              <h2>Why Choose Us</h2>
              <p>What will you get from us?</p> 
            </div> 
            <div className="why-choose-us-content">
              <div className="why-choose-us-img">
                <img src="https://picsum.photos/600/600" alt="" />
              </div>
              <div className="why-choose-us-boxes">
                <div className="boxes-item">
                  <div className="item-icon">
                    <img src={evryDay} alt="" />
                  </div>
                  <h3>Best Quality</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
                </div>
                <div className="boxes-item">
                  <div className="item-icon">
                    <img src={shop} alt="" />
                  </div>
                  <h3>Best Quality</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
                </div>
                <div className="boxes-item">
                  <div className="item-icon">
                    <img src={fast} alt="" />
                  </div>
                  <h3>Best Quality</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
                </div>
                <div className="boxes-item">
                  <div className="item-icon">
                    <img src={product} alt="" />
                  </div>
                  <h3>Best Quality</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
                </div>
              </div>
            </div>
          </div>          
        </div>
      </div>
      {/* End why Choose us Section */}
    </>
  );
}