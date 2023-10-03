import React from 'react'
import "./Subtitle.scss"

export default function Subtitle(props) {
    return (
        <h2 className="subtitleText">{props.text}</h2>
    )
}