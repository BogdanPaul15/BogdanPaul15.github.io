import React from 'react'
import "./BenefitsItem.scss"

export default function BenefitsItem(props) {
    return (
        <div className="benefitItem">
            <div className="benefitIcon">
                <img src={props.icon} className="icon" alt={props.title} />
            </div>
            <h2 className="benefitTitle">{props.title}</h2>
            <p className="benefitDescription">{props.description}</p>
        </div>
    )
}