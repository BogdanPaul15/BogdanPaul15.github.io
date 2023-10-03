import React from 'react'
import circles from '../../../assets/images/ilustrativeCircles.svg';
import block from '../../../assets/images/ilustrativeBlock.svg'
import ContactItem from './ContactItem/ContactItem';
import informations from '../../../data/info';
import "./ContactSecondSide.scss";

export default function ContactSecondSide() {
    return (
        <div className="contactSecondSide">
            <div className="bluredBackground">
                <img src={circles} className="bluredIcon" alt="Cercuri ilustrative" />
                <h2 className="bluredTitle">Ajutăm la găsirea medicilor în Germania</h2>
                <div className="informativeContainer">
                    <img src={block} alt="Bloc ilustrativ" />
                    <div className="informativeText">
                        <h3>Contact rapid</h3>
                        <p>Servicii Complete</p>
                    </div>
                </div>
            </div>
            <div className="fastContact">
                {
                    informations.map((info) => {
                        return <ContactItem key={info.id} icon={info.icon} title={info.title} description={info.description} action={info.action} />
                    })
                }
            </div>
        </div>
    )
}