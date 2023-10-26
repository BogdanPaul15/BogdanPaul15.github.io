import React, { useState } from 'react'
import SearchDoctorResult from '../SearchDoctorResult/SearchDoctorResult'
import data from '../../../data/doctors'
import "./SearchList.scss"

export default function SearchList() {
	const [sortedBy, setSortedBy] = useState("name");
	
	const handleSortChange = (event) => {
		setSortedBy(event.target.value);
	};

	function sortObjectsByField(objects, field) {
		return objects.slice().sort((a, b) => {
		  	const valueA = a[field].toLowerCase();
		  	const valueB = b[field].toLowerCase();
	  
			if (valueA < valueB) {
				return -1;
			}
			if (valueA > valueB) {
				return 1;
			}
		  	return 0;
		});
	}

	let inputSearch = "Ana Maria";

	const sortedData = sortObjectsByField(data, sortedBy);

    return (
      	<div className="doctorMenu">
			<div className="countResults">
				<p className="doctorsFound">
					{sortedData.length > 0 ? (
						`${sortedData.length} ${sortedData.length === 1 ? "medic" : "medici"}`
					) : `${sortedData.length} medici`}
				</p>
				<div className="dropdown">
					<label htmlFor="sort">Sortează după:</label>
					<select name="sort" id="sort" onChange={handleSortChange}>
						<option value="name">Nume</option>
						<option value="spec">Specializare</option>
						<option value="region">Regiune</option>
					</select>
				</div>
			</div>
			<ul className="doctorList">
				{
					!sortedData.length ? 
					<div className="noResults">
						<h2>Niciun rezultat găsit</h2>
						<p>Nu există niciun rezultat pentru {`"${inputSearch}"`}, încercați să căutați altceva.</p>
					</div> :
					sortedData.map((doctor, id) => {
						return <SearchDoctorResult result={doctor} key={id} />
					})
				}
			</ul>
      	</div>
    )
}