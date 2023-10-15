import React from 'react'
import filter from '../../../assets/images/filterSearch.svg'
import "./SearchButton.scss";

export default function SearchButton(props) {
    return (
        <button className="searchButton">
            <img src={props.icon} width={20} height={20} />
            <span>{props.title}</span>
        </button>
    )
}