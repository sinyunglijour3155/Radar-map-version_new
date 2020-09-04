import React from 'react';
import Dropdown from "./components/Dropdown";
import Radarmap from "./components/Radarmap";

function App() {
    const isBackgroundOrange = true;
    return (
        <div>
            <center>
                <h1>2021 STEM+ Challenges</h1>
                <h2>Scoreboard</h2>
            </center>
            <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Select location</h2>
            <Dropdown />
            <Radarmap />
        </div>

    )
}

export default App;
