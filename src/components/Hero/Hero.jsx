import React from 'react'
import ilustration from "../../assets/images/main.svg"
import whiteRightArrow from "../../assets/images/arrow-right.svg"
import search from "../../assets/images/search.svg"
import SubtitleTag from '../Utility/SubtitleTag/SubtitleTag'
import ActionButton from '../Utility/ActionButton/ActionButton'
import "./Hero.scss"

export default function Hero() {

    return (
        <div className="hero">
            <div className="heroText">
                <SubtitleTag text="Experți medicali" />
                <h1 className="heroTitle">Găsește medicul român potrivit oriunde în Germania</h1>
                <p className="heroParagraph">Descoperiți medici români în Germania cu ușurință. Simplu de găsit, consultați și beneficiați de experiența medicală de încredere, în limba dumneavoastră.</p>
                <div className="heroCTA">
                    <form className="searchForm form">
                        <fieldset className="fieldset">
                            <legend className="SROnly">Caută un medic</legend>
                            <label className="SROnly" htmlFor="s" hidden>Caută un medic</label>
                            <img src={search} className="iconSearch" alt="Lupă" />
                            <input type="search" className="input inputSearch" id="s" name="s" maxLength="50" placeholder="Introduceți un nume sau căutați..." spellCheck="false" autoCorrect="off" results="10" />
                            <button type="submit" className="buttonSearch">
                                <img src={whiteRightArrow} alt="Săgeată spre dreapta" />
                            </button>
                            <button type="submit" className="SROnly">Aplică căutarea</button>
                        </fieldset>
                    </form>
                    <ActionButton text="Medici" action="/medici" />
                </div>
            </div>
            <div className="heroVisual">
                <img src={ilustration} alt="Zonă geografică marcată pe hartă" className="heroImage" />
            </div>
        </div>
    )
}