import React from 'react'
import "./SearchTag.scss"

export default function SearchTag(props) {
    return (
        <a href="#" className="searchTag">
            <span className="searchTagTitle">{props.text}</span>
            <span className="numberOfResults">{props.number}</span>
        </a>
    )
}