import { useState } from "react";
import { useNavigate } from "react-router";
import './HomeFunctions.css';

export function HomeFunctions() {

    const navigate = useNavigate();
    return (
        <>
            <div className="functions-container">
                <button className="search-schools-button"
                onClick={() => {
                    navigate("/search-schools");
                }}>
                    <img src="src/assets/stupidcat.jpg" className="big-button-icons"/>
                    <span className="button-name-text">Search Schools</span>
                    <span className="button-info-text">Filter by score, travel time, CCAs and programmes </span>
                </button>

                <button className="search-schools-button"
                onClick={() => {
                    navigate("/shortlist");
                }}>
                    <img src="src/assets/stupidcat.jpg" className="big-button-icons"/>
                    <span className="button-name-text">View Shortlist</span>
                    <span className="button-info-text">test test test </span>
                </button>

                <button className="search-schools-button">
                    <img src="src/assets/stupidcat.jpg" className="big-button-icons"/>
                    <span className="button-name-text">Match Score Weights</span>
                    <span className="button-info-text">Decide what matters most, then rank every school by fit </span>
                </button>
            </div>
        </>
        
    );
}