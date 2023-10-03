import React from 'react'
import map from '../../../assets/images/map-regular.svg'
import ActionButton from '../../Utility/ActionButton/ActionButton'
import "./RegionsInfo.scss"

export default function RegionsInfo() {
	return (
		<div className="regionsInfo">
			<div className="regionsHead">
				<img src={map} className="regionsIcon" alt="Hartă" />
				<ActionButton text="Medici" action="/medici" />
			</div>
			<h2>Descoperă Medici în Germania cu Ajutorul Hărții</h2>
			<p>Cu ajutorul hărții, găsirea medicilor în Germania devine rapidă și eficientă. Aplicația noastră simplifică procesul de căutare și filtrare, permițându-vă să găsiți medici în regiunea dvs. Cu doar câteva clickuri, puteți explora harta interactivă și vedea imediat toți medicii din apropierea dvs.</p>
		</div>
	)
}