import React, { useEffect, useState } from "react";
import './BreakingBadGenerator.css';
import { PeriodicString } from "./components";
import { periodify } from "./utils";
import {periodicElements} from "../../constants";

const BreakingBadGeneratorSolution: React.FC = () => {
    const [firstLine, setFirstLine] = useState('');
    const [lastLine, setLastLine] = useState('')
    const [first, setFirst] = useState(['', '', '']);
    const [last, setLast] = useState(['', '', '']);

    useEffect(() => {
        setFirst(periodify(firstLine))
    }, [firstLine])

    useEffect(() => {
        setLast(periodify(lastLine))
    }, [lastLine])

    return (
        <div className="Generator">
            <div className="Generator-logo">
                <PeriodicString strings={first}/>
                <PeriodicString strings={last}/>
            </div>

            <div className="row">
                <div className="col form-item">
                    <label htmlFor="firstLine">First Line {periodicElements.length}</label>
                    <input id="firstLine" onChange={e => setFirstLine(e.target.value)} value={firstLine}/>
                </div>

                <div className="col form-item">
                    <label htmlFor="secondLine">Second Line</label>
                    <input id="secondLine" onChange={e => setLastLine(e.target.value)} value={lastLine}/>
                </div>
            </div>

            <div>
                <button onClick={() => {
                    setFirstLine('Breaking')
                    setLastLine('Bad')
                }
                }>Example 1</button>
            </div>
        </div>
    )
}

export default BreakingBadGeneratorSolution;