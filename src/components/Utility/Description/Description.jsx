import React from 'react'
import "./Description.scss"

export default function Description(props) {
    return (
        <p className="description">{props.text}</p>
    )
}