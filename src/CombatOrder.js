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
    newArr[i].roll = parseInt(e.target.value)
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
        <button onClick={(e) => addParticipant()}>Add</button>
      </label>
      <button className="orderBtn" onClick={(e) => order(e)}>
        Order
      </button>
      <ol>
        {participants.map((participant, i) => (
          <li key={`li-${i}`}>
            <label forhtml="roll" key={`lab${i}`}>
              {participant.name} :
              <input
                id={`roll${i}`}
                name={`roll${i}`}
                key={`inp${i}`}
                value={participant.roll}
                onChange={(e) => handleRoll(i, e)}
                onBlur={(e) => handleRoll(i, e)}
              />
            </label>
            <button
              key={`btn-${i}`}
              className="removeParticipant"
              onClick={(e) => {
                removePostition(i);
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default CombatOrder;
