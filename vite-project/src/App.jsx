import { Navbar } from './Components/Navbar'
import { Home } from './Components/Home'
import './App.css'
import { About } from './Components/About'
import { Projects } from './Components/Projects'
import { Services } from './Components/Services'
import { FAQ } from './Components/faq'
import { Pricing } from './Components/pricing'
import { Reviews } from './Components/reviews'
import { Footer } from './Components/footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Checkout } from './pages/Checkout'
import { CartProvider } from './Context/cardcontext'

function App() {
  return (
    <CartProvider>
        <Navbar />

        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Home />
                <About />
                <Projects />
                <Services />
                <FAQ />
                <Pricing />
                <Reviews />
                <Footer />
              </>
            } 
          />

        
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
    </CartProvider>
  )
}

export default App