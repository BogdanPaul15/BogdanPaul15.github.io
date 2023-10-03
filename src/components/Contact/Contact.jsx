import React from 'react'
import SubtitleTag from '../Utility/SubtitleTag/SubtitleTag';
import Subtitle from '../Utility/Subtitle/Subtitle';
import Description from '../Utility/Description/Description'
import ContactSecondSide from './ContactSecondSide/ContactSecondSide';
import InputContact from './InputContact/InputContact';
import "./Contact.scss";

export default function Contact() {
    return (
        <section className="contactSection" id="contact">
            <div className="contactInfo">
                <SubtitleTag text="Contact" />
                <Subtitle text="Contactează-ne" />
                <Description text="Dacă aveți întrebări, comentarii sau aveți nevoie de asistență suplimentară, suntem aici pentru a vă ajuta" />
            </div>
            <div className="contactContainer">
                <div className="contactSide">
                    <h2 className="formTitle">Trimite-ne un Mesaj!</h2>
                    <form className="contactForm">
                        <fieldset className="contactFieldset">
                            <legend className="SROnly">Formular de Contact</legend>
                            <fieldset className="nameFieldset">
                                <legend className="SROnly">Nume și prenume</legend>
                                <InputContact text="Nume" for="firstname" type="text" id="firstname" />
                                <InputContact text="Prenume" for="lastname" type="text" id="lastname" />
                            </fieldset>
                            <InputContact text="Adresă de email" for="email" type="email" id="email" />
                            <InputContact text="Subiect" for="subject" type="text" id="subject" />
                            <label className="labelContact" htmlFor="message">Mesaj</label>
                            <textarea className="textareaContact" id="message" name="message"></textarea>
                            <fieldset className="checkboxFieldset">
                                <legend className="SROnly">Acordul privind termenii și condițiile website-ului</legend>
                                <input type="checkbox" id="terms" name="terms" className="checkbox" />
                                <label className="labelContact" htmlFor="terms">Am citit și sunt de acord cu <a href="#" className="link">termenii și condițiile</a></label>
                            </fieldset>
                            <button type="submit" className="buttonContact">Trimite</button>
                            <button type="submit" className="SROnly">Trimite</button>
                        </fieldset>
                    </form>
                </div>
                <ContactSecondSide />
            </div>
        </section>
    )
}