import React from "react";

const CharacterCard = (props) => {
  const { image, name, stats, text } = props;
  return (
    <div className="cc-wrapper">
      <div className="cc-aside">
        <h3>{name}</h3>
        <img className="cc-image" src={image} alt={name}></img>
        <div className="cc-stats">
          <ul className="cc-list">
            {Object.entries(stats).map(([key, value], i) => (
              <li className="cc-list-item" key={i}>
                {key}: {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="cc-main">
        <p className="cc-text">{text}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
