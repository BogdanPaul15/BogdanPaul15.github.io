import React, { useState } from 'react';
import filter from '../../assets/images/filters.svg';
import search from "../../assets/images/search.svg"
import email from "../../assets/images/envelope-regular.svg"
import SearchList from './SearchList/SearchList';
import SearchTag from '../Utility/SearchTag/SearchTag';
import SubtitleTag from '../Utility/SubtitleTag/SubtitleTag';
import regionData from '../../data/regions'
import specData from '../../data/spec'
import './SearchMainContent.scss';

export default function SearchMainContent() {
    const [selectedRegions, setSelectedRegions] = useState([]);
    const [selectedSpec, setSelectedSpec] = useState([]);

    const handleCheckboxChange = (event, region) => {
        const { checked } = event.target;
        if (checked) {
          setSelectedRegions([...selectedRegions, region]);
        } else {
          setSelectedRegions(selectedRegions.filter((selectedRegion) => selectedRegion.id !== region.id));
        }
      };
    const handleCheckboxChangeSpec = (event, spec) => {
        const { checked } = event.target;
        if (checked) {
          setSelectedSpec([...selectedSpec, spec]);
        } else {
          setSelectedSpec(selectedSpec.filter((selectedSpec) => selectedSpec.id !== spec.id));
        }
      };

    console.log(selectedRegions);
    console.log(selectedSpec);
    return (
        <main className="mainSearch">
            <div className="titleContainer">
                <SubtitleTag text="Medici" />
                <h1 className="searchTitle">Caută Medici Români în Germania</h1>
                <h3 className="searchDesc">Descoperă comunitatea medicală românească din Germania</h3>
            </div>
            <div className="searchWrapper">
                <form className="searchDoctor">
                    <fieldset className="doctorFieldsetSearch">
                        <label className="SROnly" htmlFor="searchDoctor" hidden>Caută un medic</label>
                        <img src={search} className="iconSearchDoctor" alt="Lupă" />
                        <input type="search" className="doctorInput" id="searchDoctor" name="searchDoctor" maxLength="50" placeholder="Introduceți un nume sau căutați..." spellCheck="false" autoCorrect="off" results="16" />
                        <button>Caută</button>
                    </fieldset>
                </form>
                <button className="searchFilters">
                    <img src={filter} alt="" />
                    <span>Filtre</span>
                    <span className="activeFilters">
                        {/* Here should be the number of selected filters */}
                    </span>
                </button>
                <div className="filtersContainer">
                    <h2>Filtre</h2>
                    <details>
                        <summary>Regiune</summary>
                        {regionData.map((region) => (
                            <div key={region.id}>
                            <input
                                type="checkbox"
                                name={region.name}
                                checked={selectedRegions.some((selectedRegion) => selectedRegion.id === region.id)}
                                onChange={(event) => handleCheckboxChange(event, region)}
                            />
                            <label htmlFor={region.name}>{region.name}</label>
                            </div>
                        ))}
                    </details>
                    <details>
                        <summary>Specializare</summary>
                        {specData.map((spec) => (
                            <div key={spec.id}>
                            <input
                                type="checkbox"
                                name={spec.name}
                                checked={selectedSpec.some((selectedSpec) => selectedSpec.id === spec.id)}
                                onChange={(event) => handleCheckboxChangeSpec(event, spec)}
                            />
                            <label htmlFor={spec.name}>{spec.name}</label>
                            </div>
                        ))}
                    </details>
                </div>
            </div>
            <div className="listSearchWrapper">
                <SearchList />
                <div className="searchSecondSide">
                    <div className="newsletterInfo">
                        <div className="newsletterHead">
                            <img src={email} alt="" className="newsletterIcon" />
                        </div>
                        <div className="newsletterText">
                            <h2 className="newsletterTitle">Înscrie-te pentru actualizări</h2>
                            <p className="newsletterDesc">Activați această alertă pentru a nu pierde cele mai recente informații.</p>
                        </div>
                        <form action="" className="newsletterForm">
                            <label className="SROnly" htmlFor="s" hidden>Înscrie-te la buletinul informativ folosind adresa de email</label>
                            <input type="email" className="inputEmail" id="s" name="s" maxLength="50" placeholder="Adresă de email" spellCheck="false" autoCorrect="off" />
                            <button type="submit" className="newsletterSubmit">Înscrie-te</button>
                            <button type="submit" className="SROnly">Înscrie-te la buletinul informativ</button>
                        </form>
                    </div>
                    <div className="relatedSearches">
                        <h2 className="relatedTitle">Căutări relevante</h2>
                        <div className="relatedSearchesList">
                            <SearchTag text="Berlin" number="4" />
                            <SearchTag text="Neurologie" number="16" />
                            <SearchTag text="Baden-Wurttemberg" number="42"/>
                            <SearchTag text="Bayern" number="2"/>
                            <SearchTag text="Medicină generală și de familie" number="4"/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}