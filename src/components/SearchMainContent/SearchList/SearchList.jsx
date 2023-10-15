import React from 'react'
import SearchDoctorResult from '../SearchDoctorResult/SearchDoctorResult'
import "./SearchList.scss"

export default function SearchList() {

    return (
      	<div className="doctorMenu">
			<div className="countResults">
				<p className="doctorsFound">250 medici</p>
				<div className="dropdown">
					<span>Sortează după:</span>
					<select name="" id="">
						<option value="">Nume</option>
						<option value="">Specializare</option>
						<option value="">Regiune</option>
					</select>
				</div>
			</div>
			<ul className="doctorList">
				{/* {
					input.length && !results.length ? 
					<div className="noResults">
						<h2>Niciun rezultat găsit</h2>
						<p>Nu există nicio regiune cu acel nume, încercați să căutați altceva.</p>
					</div> :
					results.map((result, id) => {
						return <SearchResult result={result} key={id} />
					})
				} */}
                <SearchDoctorResult />
			</ul>
      	</div>
    )
}