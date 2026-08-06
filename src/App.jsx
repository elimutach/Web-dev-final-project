import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import AboutUs from './pages/about_us'
import BiznaStarter from './pages/bizna_starter'
import StandardBiz from './pages/standard_biz'
import CorporateBiz from './pages/corporate_biz'
import Ecommerce from './pages/ecommerce'
import DesignAndBranding from './pages/design_branding'
import CorporateTraining from './pages/corporate'
import ContactUs from './pages/contact'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/bizna" element={<BiznaStarter />}/>
        <Route path="/standardbiz" element={<StandardBiz />} />
        <Route path="/corporatebiz" element={<CorporateBiz />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/design" element={<DesignAndBranding />} />
        <Route path="/corporate" element={<CorporateTraining />} />
        <Route path="/contact" element={<ContactUs />} />

      </Routes>
    </div>
    
  )
};

export default App
