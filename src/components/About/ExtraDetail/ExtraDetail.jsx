import React from 'react'
import circleCheck from '../../../assets/images/circle-check-regular.svg'
import "./ExtraDetail.scss";

export default function ExtraDetail(props) {
    return (
        <div className="sectionExtra">
            <img src={circleCheck} className="iconExtra" alt="" />
            <div className="textExtra">
                <h2 className="titleExtra">{props.title}</h2>
                <p className="descExtra">{props.description}</p>
            </div>
        </div>
    )
}