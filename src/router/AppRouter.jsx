import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Portfolio from '../Pages/portfolio/Portfolio'
import Home from '../Pages/home/Home'
import Curriculum from '../Pages/curriculum/Curriculum'
import Contact from '../Pages/contact/Contact'
import Services from '../Pages/services/Services'
import Header from '../components/header/Header'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <div className='principalLayout'>
                    <Header />
                    <Route path="/" element={<Home />} />
                    <Route path="/inicio" element={<Home />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/servicios" element={<Services />} />
                    <Route path="/curriculum" element={<Curriculum />} />
                    <Route path="/contacto" element={<Contact />} />
                </div>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
