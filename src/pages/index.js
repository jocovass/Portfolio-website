import React from 'react'
import Layout from '../components/layout/Layout'
import Home from '../components/sections/Home'
import About from '../components/sections/About'
import Portfolio from '../components/sections/Portfolio'
import Cta from '../components/sections/Cta'
import Footer from '../components/sections/Footer'
import Seo from '../components/seo/Seo'

const App = () => (
  <Layout>
    <Seo />
    <Home />
    <About />
    <Portfolio />
    <Cta />
    <Footer />
  </Layout>
)

export default App
