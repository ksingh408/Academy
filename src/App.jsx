import React, { useState } from 'react'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import Service from './Component/Service'
import WelcomeSection from './Component/Welcome'
import Feathure from './Component/Features'
import Testimonials from './Component/Testimonial'
import Footer from './Component/footer'
import Article from './Component/Article'
import Orders from './Component/Orders'

function App() {
  return (
    <div>
      <Hero />

      <div className="bg-blue-900">
        <WelcomeSection />
        <Service />
        <Feathure />
        <Testimonials />
        <Article />
        <Orders />
        <Footer />
      </div>
    </div>
  );
}


export default App
