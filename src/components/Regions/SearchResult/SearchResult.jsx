import React, { useContext } from 'react'
import { RegNameContext } from "../../../context/RegNameContext"
import "./SearchResult.scss"

export default function SearchResult( { result } ) {
  	const { regName, setRegName } = useContext(RegNameContext);

  	const handleNameChange = () => {
		if (result.name !== regName) {
		setRegName(result.name);
		}
  	};

	return (
		<li className="regionItem" data-region={result.name} onMouseEnter={handleNameChange} onMouseLeave={() => setRegName('')}>
			<a className="regionLink" href="#">
				<span className="regionText">{result.name}</span>
			</a>
		</li>
	)
}