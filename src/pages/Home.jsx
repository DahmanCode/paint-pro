import React from 'react'

// import heroImg from '../assets/heroImg.jpg'
import heroImg from '../assets/transparent.png'

import leftImg from '../assets/why-choose-us/leftImg.jpg'
import icon1 from '../assets//why-choose-us/icon1.png'
import icon2 from '../assets//why-choose-us/icon2.png'
import icon3 from '../assets//why-choose-us/icon3.png'
import icon4 from '../assets//why-choose-us/icon4.png'

import data1 from '../data/dynamicProducts.json'

export default function Home() {
  const { dynamicProducts } = data1
  // console.log(dynamicProducts)
  return (
    <>
      {/* Start Hero Section */}
      <div className="hero">
        <div class="custom-shape">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 220"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="container">
          <div className="hero-container">
            <div className="hero-content">
              <h1>Where your expressions meet colors</h1>
              <p>
                The colcors you choose are a matter of personal and project
                preferences, we want to provide those colors and share them with
                you in your expressions.
              </p>
              <button className="btn">Shop Now</button>
            </div>
            <div className="hero-img">
              <img src={heroImg} alt="" />
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
              <h2>shop by brand</h2>
            </div>
            <div className="product-content">
              {/* <div className="card-content">
                <h3>Repellendus quidem.</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptatibus ducimus nesciunt provident maxime totam itaque?
                </p>
                <button className="btn">
                  Explore
                  <div className="arrows">
                    <i class="fa-solid fa-arrow-right"></i>
                    <i class="fa-solid fa-arrow-right"></i>
                  </div>
                </button>
              </div> */}

              <div className="product-cards">
                <div className="card">
                  <img src={dynamicProducts[0].img4L} alt="" />
                  <div className="product-card-content">
                    <h3>{dynamicProducts[0].title}</h3>
                    <p>{dynamicProducts[0].description[0]}</p>
                    <i class="fa-solid fa-circle-info"></i>
                    <ul>
                      <li>- {dynamicProducts[0].description[0]}</li>
                      <li>- {dynamicProducts[0].description[1]}</li>
                      <li>- {dynamicProducts[0].description[2]}</li>
                      <li>- {dynamicProducts[0].description[3]}</li>
                    </ul>
                  </div>
                  <button className="btn">Shop Now</button>
                </div>
                <div className="card">
                  <img src={dynamicProducts[5].img20L} alt="" />
                  <div className="product-card-content">
                    <h3>{dynamicProducts[5].title}</h3>
                    <p>{dynamicProducts[5].description[0]}</p>
                    <i class="fa-solid fa-circle-info"></i>
                    <ul>
                      <li>- {dynamicProducts[5].description[0]}</li>
                      <li>- {dynamicProducts[5].description[1]}</li>
                      <li>- {dynamicProducts[5].description[2]}</li>
                      <li>- {dynamicProducts[5].description[3]}</li>
                    </ul>
                  </div>
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
            {/* <div className="title">
              <h2>Why Choose Us</h2>
              <p>What will you get from us?</p>
            </div> */}
            <div className="why-choose-us-content">
              <div className="why-choose-us-img">
                <img src={leftImg} alt="" />
              </div>
              <div className="why-choose-us-boxes">
                <div className="boxes-item">
                  <div className="item-icon">
                    <img src={icon1} alt="" />
                  </div>
                  <h3>Expressive Journey</h3>
                  <p>
                    Designing is a journey without a destination, every step is a new expression.
                  </p>
                </div>
                <div className="boxes-item">
                  <div className="item-icon">
                    <img src={icon2} alt="" />
                  </div>
                  <h3>Expressive Stories</h3>
                  <p>
                    Every new expression on this journey needs to tell a new story.
                  </p>
                </div>
                <div className="boxes-item">
                  <div className="item-icon">
                    <img src={icon3} alt="" />
                  </div>
                  <h3>Color Essence</h3>
                  <p>
                    Every new design story needs colors to give details and essence to the project.
                  </p>
                </div>
                <div className="boxes-item">
                  <div className="item-icon">
                    <img src={icon4} alt="" />
                  </div>
                  <h3>We are on the journey together</h3>
                  <p>
                    Ocean and Cloud is your friend to not make you run out of supplies, we are on the journey together to tell different stories.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End why Choose us Section */}

      {/* Start CTAV Section */}
      <div className="ctva">
        <div className="container">
          <div className='ctva-text'>

          </div>
        </div>
      </div>
      {/* End CTAV Section */}
    </>
  )
}
