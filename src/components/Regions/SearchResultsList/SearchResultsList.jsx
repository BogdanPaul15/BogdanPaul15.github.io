import React from 'react'
import { useContext } from 'react';
import { InputValueContext } from '../../../context/InputValueContext';
import SearchResult from '../SearchResult/SearchResult'
import "./SearchResultsList.scss"

export default function SearchResultsList( { results } ) {
    const { input } = useContext(InputValueContext);
    return (
      	<div className="regionMenu">
			<ul className="regionList">
				{
					input.length && !results.length ? 
					<div className="noResults">
						<h2>Niciun rezultat găsit</h2>
						<p>Nu există nicio regiune cu acel nume, încercați să căutați altceva.</p>
					</div> :
					results.map((result, id) => {
						return <SearchResult result={result} key={id} />
					})
				}
			</ul>
      </div>
    )
}