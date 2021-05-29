import React from "react";
import { useState } from "react";

const CombatOrder = ({ characters }) => {
  const [participants, setParticipants] = useState(characters);
  const [newParticipant, setNewParticipant] = useState("");

  const order = () => {
    setParticipants([
      ...participants.sort((a, b) => {
        return a.roll - b.roll;
      }),
    ]);
  };

  const handleRoll = (i, e) => {
    const newArr = [...participants]
    const val = parseInt(e.target.value)
    if(val === 0 || typeof val !== 'number' || Number.isNaN(val)) {
      newArr[i].roll = ''
    } else {
      newArr[i].roll = val
    }
    setParticipants(newArr);
  };

  const removePostition = (i) => {
    participants.splice(i, 1);
    setParticipants([...participants]);
  };

  const addParticipant = () => {
    const roll = Math.floor(Math.random() * 20)
    setParticipants([...participants, { name: newParticipant, roll}]);
  };

  return (
    <div>
      <label>
        <input
          id="newParticipant"
          value={newParticipant}
          onChange={(e) => setNewParticipant(e.target.value)}
          onBlur={(e) => setNewParticipant(e.target.value)}
          className="addInput"
        />
        <button className="addBtn" onClick={(e) => addParticipant()}>Add</button>
      </label>
      <button className="orderBtn" onClick={(e) => order(e)}>
        Order
      </button>
      <ol>
        {participants.map((participant, i) => (
          <li key={`li-${i}`}>
            <label forhtml="roll" key={`lab${i}`}>
              {participant.name}
            </label>
            <input
              id={`roll${i}`}
              name={`roll${i}`}
              key={`inp${i}`}
              value={participant.roll}
              type="number"
              onChange={(e) => handleRoll(i, e)}
              onBlur={(e) => handleRoll(i, e)}
            />
            <button
              key={`btn-${i}`}
              className="removeParticipant"
              onClick={(e) => {
                removePostition(i);
              }}
            >
              -
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default CombatOrder;
