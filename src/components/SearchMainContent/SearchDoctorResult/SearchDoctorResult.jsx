import React from 'react'
import flag from '../../../assets/images/germany-flag-icon.svg'
import phone from '../../../assets/images/phon.svg'
import location from '../../../assets/images/location-dot.svg'
import user from '../../../assets/images/user.svg'
import settings from '../../../assets/images/sliders-solid.svg'
import "./SearchDoctorResult.scss"

export default function SearchDoctorResult() {

	return (
		<>
            <li className="doctorItem">
                <div className="userIcon">
                    <img src={user} alt="" width={20} height={20} />
                </div>
                <div className="primaryInfo">
                    <div className="doctorInfo">
                        <div className="doctorInfos">
                            <h2 className="doctorName">Dr. Popescu Andrei</h2>
                            <span className="doctorSpecialization">NEUROLOGIE</span>
                        </div>
                        <p className="doctorLocation">
                            <img src={location} alt="" />
                            <span>Bad Krozingen 79189, Bahnhofstraße 24</span>
                        </p>
                        <div className="doctorRegion">
                            <img src={flag} alt="" />
                            <span>Berlin</span>
                        </div>
                    </div>
                    <div className="doctorSettings">
                        <button>
                            <img src={settings} />
                        </button>
                        <a href="#">+40 757 819 XXX</a>
                        <img src={phone} alt="" className="doctorPhone"/>
                    </div>
                </div>
            </li>
            <li className="doctorItem">
                <div className="userIcon">
                    <img src={user} alt="" width={20} height={20} />
                </div>
                <div className="primaryInfo">
                    <div className="doctorInfo">
                        <div className="doctorInfos">
                            <h2 className="doctorName">Dr. Popescu Andrei</h2>
                            <span className="doctorSpecialization">NEUROLOGIE</span>
                        </div>
                        <p className="doctorLocation">
                            <img src={location} alt="" />
                            <span>Bad Krozingen 79189, Bahnhofstraße 24</span>
                        </p>
                        <div className="doctorRegion">
                            <img src={flag} alt="" />
                            <span>Berlin</span>
                        </div>
                    </div>
                    <div className="doctorSettings">
                        <button>
                            <img src={settings} />
                        </button>
                        <a href="#">+40 757 819 XXX</a>
                        <img src={phone} alt="" className="doctorPhone"/>
                    </div>
                </div>
            </li>
            <li className="doctorItem">
                <div className="userIcon">
                    <img src={user} alt="" width={20} height={20} />
                </div>
                <div className="primaryInfo">
                    <div className="doctorInfo">
                        <div className="doctorInfos">
                            <h2 className="doctorName">Dr. Popescu Andrei</h2>
                            <span className="doctorSpecialization">NEUROLOGIE</span>
                        </div>
                        <p className="doctorLocation">
                            <img src={location} alt="" />
                            <span>Bad Krozingen 79189, Bahnhofstraße 24</span>
                        </p>
                        <div className="doctorRegion">
                            <img src={flag} alt="" />
                            <span>Berlin</span>
                        </div>
                    </div>
                    <div className="doctorSettings">
                        <button>
                            <img src={settings} />
                        </button>
                        <a href="#">+40 757 819 XXX</a>
                        <img src={phone} alt="" className="doctorPhone"/>
                    </div>
                </div>
            </li>
        </>
	)
}