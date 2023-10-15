import React from 'react'
import "./MainContent.scss"
import Regions from '../Regions/Regions'
import Benefits from '../Benefits/Benefits'
import About from '../About/About'
import Contact from '../Contact/Contact'

export default function MainContent() {
    return (
        <main className="mainHome">
            <Regions />
            <Benefits />
            <About />
            <Contact />
        </main>
    )
}