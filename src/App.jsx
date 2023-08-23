import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About.jsx"
import Products from "./pages/Products"
import Contact from "./pages/Contact"

import Layout from "./components/Layout"
export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path="/" element={<Header />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
