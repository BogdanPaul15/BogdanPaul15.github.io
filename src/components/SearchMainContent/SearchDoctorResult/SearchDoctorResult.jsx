import React, { useState } from 'react'
import flag from '../../../assets/images/germany-flag-icon.svg'
import phone from '../../../assets/images/phon.svg'
import location from '../../../assets/images/location-dot.svg'
import user from '../../../assets/images/user.svg'
import report from '../../../assets/images/flag-regular.svg'
import "./SearchDoctorResult.scss"

export default function SearchDoctorResult( { result } ) {
    const [reportModal, setReportModal] = useState(false);

	return (
        <li className="doctorItem">
            <img src={user} alt="" width={20} height={20} className="userIcon" />
            <div className="primaryInfo">
                <div className="doctorInfo">
                    <div className="doctorInfos">
                        <h2 className="doctorName">{result.name}</h2>
                        <span className="doctorSpecialization">{result.spec}</span>
                    </div>
                    <p className="doctorLocation">
                        <img src={location} alt="" />
                        <a href="https://www.google.com/maps/search/Bad+Krozingen+79189+Bahnhofstraße+24" target="_blank">
                            <span>{result.address}</span>
                        </a>
                    </p>
                    <div className="doctorRegion">
                        <img src={flag} alt="" />
                        <span>{result.region}</span>
                    </div>
                </div>
                <div className="doctorSettings">
                    <button onClick={() => setReportModal(!reportModal)}>
                        <img src={report} />
                    </button>
                    {
                        reportModal && (
                            <div className="modal">
                                <div className="modalContainer">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="modalIcon">
                                        <path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/>
                                    </svg>
                                    <h2 className="modalTitle">Raportează</h2>
                                </div>
                            </div>
                        )
                    }
                    <a href="#">{result.phone}</a>
                    <img src={phone} alt="" className="doctorPhone"/>
                </div>
            </div>
        </li>
	)
}