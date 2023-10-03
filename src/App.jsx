import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavigationBar from './components/NavigationBar/NavigationBar'
import Hero from './components/Hero/Hero'
import MainContent from './components/MainContent/MainContent'
import FooterBar from './components/FooterBar/FooterBar'
import "./global.scss"

export default function App() {
    return (
        <Router>
            <div className="framework" data-theme="dark">
                <NavigationBar />
                <Routes>
                    <Route path="/" element={ <><Hero /> <MainContent /></> }/>
                    <Route path="/medici" element={ <Hero /> }/>
                    <Route path="*" element="" />
                </Routes>
                <FooterBar />
            </div>
        </Router>
    )
}