import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Router, Route, Routes} from 'react-router-dom'

import './index.css'

import HomePage from './landing_page/home/HomePage'
import Signup from './landing_page/signup/Signup'
import Login from "./landing_page/login/Login";
import About from './landing_page/about/About'
import PricingPage from './landing_page/pricing/PricingPage'
import SupportPage from './landing_page/support/SupportPage'
import ProductPage from './landing_page/products/ProductPage'
import Navbar from './Navbar'
import Footer from './Footer'
import NotFound from './landing_page/NotFound'



createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <Navbar />
 <Routes>
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/signup" element={<Signup />}></Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/about" element={<About />}></Route>
     <Route path="/products" element={<ProductPage />}></Route>
    <Route path="/pricing" element={<PricingPage />}></Route>
    <Route path="/support" element={<SupportPage />}></Route>
    <Route path="*" element={<NotFound />}></Route>
 </Routes>
 <Footer />
 </BrowserRouter>
)
