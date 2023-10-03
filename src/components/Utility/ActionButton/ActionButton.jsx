import React from 'react'
import { Link } from 'react-router-dom'
import grayRightArrow from '../../../assets/images/arrow-rightG.svg'
import "./ActionButton.scss";

export default function ActionButton(props) {
    return (
        <Link to={props.action} className="actionButton" onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }}>
            <span>{props.text}</span>
            <img src={grayRightArrow} alt="Săgeată spre dreapta" />
        </Link>
    )
}