import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavigationBar from './components/NavigationBar/NavigationBar'
import Home from './pages/Home/Home'
import FooterBar from './components/FooterBar/FooterBar'
import "./global.scss"
import Search from './pages/Search/Search'

export default function App() {
    return (
        <Router>
            <div className="framework" data-theme="dark">
                <NavigationBar />
                <Routes>
                    <Route path="/" element={ <Home /> }/>
                    <Route path="/medici" element={ <Search /> }/>
                    <Route path="*" element="" />
                </Routes>
                <FooterBar />
            </div>
        </Router>
    )
}