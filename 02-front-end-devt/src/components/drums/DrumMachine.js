import { drumPads } from "./data";
import DrumPad from "./DrumPad";
import Power from "./Power";
import { useState } from "react";

function DrumMachine() {
  const defaultDisplay = 'Hit a Drum Key';
  const [displayText, setDisplay] = useState(defaultDisplay);
  const [isPowerOn, setPowerOn] = useState(true);

  const display =  (i) => {
     setDisplay(drumPads[i].sound);
  };
  const toggleSwitch = (e) => { 
    const power = e.target.checked;
    setPowerOn(power);
    if(power) setDisplay(defaultDisplay);
    else setDisplay('Power Off');
  }

  return (
    <section id="drum-machine">
      <div id="display">{displayText}</div>
      <div id="padbox">
        {drumPads.map((pad, i) => (
          <DrumPad
            index={i}
            code={pad.code}
            letter={pad.letter}
            url={pad.url}
            key={pad.letter + pad.code}
            onHit={display}
            power={!isPowerOn}
          />
        ))}
      </div>
      <Power isOn={isPowerOn} onToggle={toggleSwitch} />
    </section>
  );
}

// listen for keyboard events
window.addEventListener("keydown", (e) => {
  const btn = document.querySelector("#" + e.code);
  // simulate mouse click
  if (btn) {
    btn.dispatchEvent(new MouseEvent("click", { bubbles: true, view: window }));
  }
});

export default DrumMachine;
