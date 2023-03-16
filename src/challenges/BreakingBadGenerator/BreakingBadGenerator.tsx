import React from "react";
import './BreakingBadGenerator.css';

/**
 * Breaking Bad logo generator challenge
 *
 * Given
 * - an array of periodic element strings e.g. ['Br', 'B', ...]
 * - 2 input fields.
*/

/**
 * Challenge
 *
 * Provide a logo generator component that
 * - handles user input on 2 input fields
 * - checks each input value for the first occurence of a periodic element string
 * - renders 2 lines for the breaking bad logo
 *
 * if the string contains a 2 char element like ['Br']
 * - the component renders the string and highlights the 2 char periodic element

 * if the string contains a 1 char element like ['B']
 * - the component renders the string and highlights the 1 char periodic element

 * if the string does not contain a periodic element
 * - the component renders the string only
 */

const BreakingBadGenerator: React.FC = () => {
    return (
        <div className="Generator">
            <div className="Generator-logo">
                { /* Generated logo output */ }
            </div>

            <div className="row">
                <div className="col form-item">
                    <label htmlFor="firstLine">First Line</label>
                    <input id="firstLine" />
                </div>

                <div className="col form-item">
                    <label htmlFor="secondLine">Second Line</label>
                    <input id="secondLine" />
                </div>
            </div>
        </div>
    )
}

export default BreakingBadGenerator;