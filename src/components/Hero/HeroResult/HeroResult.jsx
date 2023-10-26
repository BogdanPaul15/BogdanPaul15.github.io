import React from 'react'
import user from '../../../assets/images/user-doctor-solid.svg'
import "./HeroResult.scss"

export default function HeroResult(props) {

    return (
        <li className="homeItem">
            <a href="#" className="homeLink">
                <span className="homeIcon">
                    <img src={user} alt="" />
                </span>
                <div className="homeText">
                    <h2 className="doctorHomeName">{props.name}</h2>
                    <span className="doctorHomeSpec">{props.specialization}</span>
                </div>
            </a>
        </li>
    )
}