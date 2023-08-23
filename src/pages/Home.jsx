import React from "react";

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
            <h1>Our Best Products</h1>
            <div className="product-content">
              <div className="card-content">
                <h2>Repellendus quidem.</h2>
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
    </>
  );
}