import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Header from './pages/Header.jsx'
import Footer from './pages/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Courses from './pages/Courses.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Pricing from './pages/Pricing.jsx'
import Contact from './pages/Contact.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
          	<Header />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/courses" element={<Courses />} />
				<Route path="/portfolio" element={<Portfolio />} />
				<Route path="/pricing" element={<Pricing />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>

			<Footer />
        </BrowserRouter>
    </StrictMode>,
)
