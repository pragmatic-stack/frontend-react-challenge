import React from "react";
import './PeriodicString.css';

export type PeriodicStringProps = {
    strings: string[];
}

export const PeriodicString: React.FC<PeriodicStringProps> = ({strings}) => {
    return <div className="PeriodicString">
        <div>{ strings[0] }</div>
        {strings[1] && <div className="PeriodicString-highlight">{strings[1]}</div>}
        <div>{ strings[2] }</div>
    </div>
}