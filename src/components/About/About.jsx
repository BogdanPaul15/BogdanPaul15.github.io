import React from 'react'
import image from '../../assets/images/images.jpg'
import image_webp from '../../assets/images/images.webp'
import ExtraDetail from './ExtraDetail/ExtraDetail';
import Button from '../Utility/Button/Button';
import Subtitle from '../Utility/Subtitle/Subtitle';
import SubtitleTag from '../Utility/SubtitleTag/SubtitleTag';
import "./About.scss";

export default function About() {
    return (
        <section className="aboutSection" id="about">
            <div className="aboutText">
                <SubtitleTag text="Despre Noi" />
                <Subtitle text="Misiunea Noastră în Îngrijirea Medicală" />
                <p className="aboutDescription">Ne focusăm pe facilitarea căutării și conectării pacienților cu medici români calificați și experimentați din Germania</p>
                <div className="extraDetails">
                    <ExtraDetail title="Expertiză Medicală" description="Ne bazăm pe cunoștințele noastre din domeniul medical pentru a selecta medici de încredere, asigurându-ne că aceștia au experiența și calificările necesare pentru a oferi îngrijire medicală de calitate."/>
                    <ExtraDetail title="Facilitate de Utilizare" description="Am creat o platformă simplă și ușor de utilizat pentru a vă ajuta să căutați medici și să obțineți informațiile de care aveți nevoie într-un mod rapid și intuitiv."/>
                    <ExtraDetail title="Transparență" description="Suntem dedicați furnizării de informații transparente și relevante pentru a vă ajuta să faceți alegeri informate cu privire la îngrijirea medicală."/>
                </div>
                <Button text="Descoperă Medicii" action="/medici" />
            </div>
            <div className="imageSection">
                <picture>
                    <source srcSet={image_webp} type="image/webp" />
                    <source srcSet={image} type="image/jpeg" />
                    <img src={image} className="image" alt="Asistentă medicală" />
                </picture>
            </div>
        </section>
    )
}