import React from 'react'
import { Link } from 'react-router-dom'
import "./Button.scss"

export default function Button(props) {
    return (
        <Link to={props.action} className="primaryButton" onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }}>
            <span>{props.text}</span>
            <svg width="16" height="13" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="#ffffff" d="M18.6013 9.22432C19.1315 8.68721 19.1315 7.81494 18.6013 7.27783L11.8156 0.402832C11.2855 -0.134277 10.4246 -0.134277 9.89442 0.402832C9.36429 0.939941 9.36429 1.81221 9.89442 2.34932L14.3687 6.87822H1.35714C0.606473 6.87822 0 7.49268 0 8.25322C0 9.01377 0.606473 9.62822 1.35714 9.62822H14.3645L9.89866 14.1571C9.36853 14.6942 9.36853 15.5665 9.89866 16.1036C10.4288 16.6407 11.2897 16.6407 11.8199 16.1036L18.6056 9.22861L18.6013 9.22432Z" />
            </svg>
        </Link>
    )
}