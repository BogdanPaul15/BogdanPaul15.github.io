import React from 'react'
import "./ContactItem.scss";

export default function ContactItem(props) {
    return (
        <a href={props.action} className="contact-link">
            <div className="contact-cont">
                <div className="iconCont">
                    <img src={props.icon} />
                </div>
                <div className="textCont">
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                </div>
            </div>
        </a>
    )
}