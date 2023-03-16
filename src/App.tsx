import React from 'react';
import './App.css';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import BreakingBadGeneratorSolution from "./solutions/BreakingBadGenerator/BreakingBadGeneratorSolution";
import BreakingBadGenerator from "./challenges/BreakingBadGenerator/BreakingBadGenerator";

const router = createBrowserRouter([
    {
        path: "/",
        element: <BreakingBadGenerator/>,
    },
    {
        path: "/goal",
        element: <BreakingBadGeneratorSolution/>,
    }
]);

function App() {
    return (
        <div className="App">
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
