import React from "react";
import { Link, NavLink } from "react-router-dom"
import { BsFacebook } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'
import { AiFillInstagram } from 'react-icons/ai'

import logo from '../assets/logo.png'

export default function Footer() {
  return (
    // <div className="container">
      <div className="footer">
        <div>
          <Link className="logo">
            <img src={logo} alt="" />
          </Link>
          <div>
            <p>© 2023 Ocean & Cloud ® <br /> designed and developed by <Link to="https://twitter.com/elaammari_" target="blank">elaammari</Link></p>
          </div>
        </div>
        <div>
          <h3>quick link</h3>
          <div className="link">
            <NavLink>Home</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Prouducts</NavLink>
            <NavLink>Contact</NavLink>
          </div>
        </div>
        {/* <div>
          <h3>lorem</h3>
          <ul>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
          </ul>
        </div> */}
        <div>
          <h3>Get in touch</h3>
          <p>Questions or feedback?<br/> We'd love to hear from you</p>
          <div className="icons">
            <Link><BsFacebook /></Link>
            <Link><IoLogoWhatsapp /></Link>
            <Link><AiFillInstagram /></Link>
          </div>
        </div>
      </div>
    // </div>
  );
}