import React from 'react'
import "./SubtitleTag.scss"

export default function SubtitleTag(props) {
    return (
        <div className="subtitleTag">
            <h2 className="subtitle">{props.text}</h2>
        </div>
    )
}