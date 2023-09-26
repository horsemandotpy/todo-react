import React from "react";
import "./InputBar.css";

const InputBar = ({ handleEnter }) => {
  return (
    <div className="input-box">
      <div className="input-box__checkbox">
        <input type="checkbox" placeholder="What are you thinking ?" />
      </div>
      <div className="input-box__input">
        <input
          type="text"
          placeholder="What are you thinking ?"
          onKeyDown={(e) => handleEnter(e)}
        />
      </div>
    </div>
  );
};

export default InputBar;
