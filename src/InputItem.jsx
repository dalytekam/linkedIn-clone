import React from "react";
import "./InputItem.css";
const InputItem = ({ Icon, title, color }) => {
  return (
    <div className="inputItem">
      <Icon style={{ color: color }} />
      <h5>{title}</h5>
    </div>
  );
};

export default InputItem;
