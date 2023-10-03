import React from 'react'
import "./InputContact.scss";

export default function InputContact(props) {
    return (
        <div className="inputContainer">
            <label className="labelContact" htmlFor={props.for}>{props.text}</label>
            <input type={props.type} className="inputContact" id={props.id} name={props.for} maxLength="200" spellCheck="false" autoCorrect="off" results="10" />
        </div>
    )
}