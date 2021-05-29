import React from "react";
import { render } from "react-dom";
import Characters from "../static/api/characters.json";
import CombatOrder from "./CombatOrder";

const App = () => {
  return (
    <div>
      <CombatOrder characters={Characters} />
      {/* <CharacterCard 
        image={paladinImg}
        name='artorias'
        stats={{
          class: 'paladin',
          level: 5,
          strength: 12,
          intelect: 12,
          hp: 22
        }}
        text='adwadawdawdawdawdawdawdawdawdawdawd'
      /> */}
    </div>
  );
};

render(<App />, document.getElementById("root"));
