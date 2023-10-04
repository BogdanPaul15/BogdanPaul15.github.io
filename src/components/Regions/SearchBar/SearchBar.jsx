import React, { useContext, useState, useEffect, useRef } from 'react'
import { InputValueContext } from '../../../context/InputValueContext';
import data from '../../../data/regions';
import search from "../../../assets/images/search.svg"
import filter from "../../../assets/images/sliders-solid.svg"
import close from "../../../assets/images/x.svg"
import pin from "../../../assets/images/location-dot-solid.svg"
import './SearchBar.scss'

export default function SearchBar({ setResults }) {
    const { input, setInput } = useContext(InputValueContext);
    const [checkbox, setCheckbox] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isInputFocused, setIsInputFocused] = useState(false);
    useEffect(() => {
        // Initialize results with all data when the component mounts
        if (isInputFocused && !input)
            setResults(data);
        else { 
            if (!checkbox && !input)
                setResults([]); 
        }
    }, [isInputFocused]);
    
    const handleChange = (value) => {
        setInput(value);
        if (!checkbox && isInputFocused) {
            if (value === '') {
                // If the input is empty, display all results
                setResults(data);
            } else {
                // If the input is not empty, filter based on the input
                storeData(value);
            }
        }
    };

    const handleFocus = () => {
        setIsInputFocused(true);
        if (input && !checkbox) 
            storeData(input);
    };
    const handleUnFocus = () => {
        setIsInputFocused(false);
    };

    const handleCheckboxChange = (event) => {
        const isChecked = event.target.checked;
        setCheckbox(isChecked);
        setIsOpen(false);

        if (isChecked) {
            // If the checkbox is checked, display all results
            setResults(data);
        } else {
            if (input === '') {
                // If the input is empty, display all results
                setResults(data);
            } else {
                // If the input is not empty, filter based on the input
                storeData(input);
            }
        }
    };

    const storeData = (value) => {
        const results = data.filter((region) => {
            return (value && region.name && region.name.toLowerCase().includes(value.toLowerCase()));
        });
        setResults(results);
    };

    return (
        <div className="searchRegion">
            <fieldset className="regionFieldsetSearch">
                <label className="SROnly" htmlFor="searchRegion" hidden>Caută o regiune</label>
                <img src={search} className="iconSearchRegion" alt="Lupă" />
                <input type="search" className="regionInput" id="searchRegion" name="searchRegion" maxLength="50" placeholder="Caută o regiune" value={input} onChange={(e) => handleChange(e.target.value)} spellCheck="false" autoCorrect="off" results="16" onFocus={handleFocus}
        onBlur={handleUnFocus} />
            </fieldset>
            <fieldset className="regionFieldsetCheckbox">
                <button className={`toggleFilter ${checkbox && 'highlightToggle'}`} onClick={() => setIsOpen(true)}>
                    <img src={filter} alt="Filtre" />
                    <span>Filtre</span>
                </button>
                {
                    isOpen && (
                        <div className="modal">
                            <article className="modalContainer">
                                <header className="modalHeader">
                                    <h1 className="modalTitle">Filtre</h1>
                                    <button className="iconClose" onClick={() => setIsOpen(false)}>
                                        <img src={close} alt="Închide" />
                                    </button>
                                </header>
                                <section className="modalBody">
                                    <div className="modalBodyContent">
                                        <div className="modalInfo">
                                            <img src={pin} alt="Pin pentru locație" />
                                            <h2>Toate regiunile</h2>
                                        </div>
                                        <label className="switch" htmlFor="checkboxAllRegions">
                                            <input className="checkbox" type="checkbox" name="checkboxAllRegions" id="checkboxAllRegions" checked={checkbox} onChange={handleCheckboxChange} />
                                            <span className="slider round"></span>
                                        </label>
                                    </div>
                                </section>
                            </article>
                        </div>
                    )
                }
            </fieldset>
        </div>
    )
}
