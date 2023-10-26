import React from 'react'
import HeroResult from '../HeroResult/HeroResult'
import "./HeroResultsList.scss"

export default function HeroResultsList() {

    return (
        <div className="homeMenu">
            <ul className="homeList">
                <HeroResult name="Dr. Popescu Andrei-Ion" specialization="Medicină generală și de familie" />
                <HeroResult name="Dr. Popescu Andrei" specialization="Neurologie" />
                <HeroResult name="Dr. Popescu Andrei" specialization="Neurologie" />
                <HeroResult name="Dr. Popescu Andrei" specialization="Neurologie" />
                <HeroResult name="Dr. Popescu Andrei" specialization="Neurologie" />
                <HeroResult name="Dr. Popescu Andrei" specialization="Neurologie" />
                <HeroResult name="Dr. Popescu Andrei" specialization="Neurologie" />
                <HeroResult name="Dr. Popescu Andrei" specialization="Neurologie" />
                <HeroResult name="Dr. Popescu Andrei" specialization="Neurologie" />
                <HeroResult name="Dr. Popescu Andrei" specialization="Neurologie" />
                <HeroResult name="Dr. Popescu Andrei" specialization="Neurologie" />
                <HeroResult name="Dr. Popescu Andrei" specialization="Neurologie" />
                <HeroResult name="Dr. Popescu Andrei" specialization="Neurologie" />
                <HeroResult name="Dr. Popescu Andrei" specialization="Neurologie" />
            </ul>
            {/* <div className="noResults">
                <h2>Niciun rezultat găsit</h2>
                <p>Nu există niciun medic, încercați să căutați altceva.</p>
            </div> */}
        </div>
    )
}