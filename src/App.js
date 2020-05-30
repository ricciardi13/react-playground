import React from 'react';
import Split from "./composition/Split";
import Tooltip from "./composition/Tooltip";
import "./App.css";
import TheDate from "./state/TheDate";
import HelloWorld from "./state-drills/HelloWorld";
import Bomb from "./state-drills/Bomb";
import RouletteGun from "./state-drills/RouletteGun";


function App() {
  return (
    <main className='App'>
      <Split className="left" flexBasis={2}>
        <HelloWorld />
        <Bomb />
        <RouletteGun />
      </Split>  
      <Split className="right">
        <TheDate />
      </Split>

    </main>
  );
}

export default App;