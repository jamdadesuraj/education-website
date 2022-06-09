import React from "react";
import "./inputControl.css";
const InputController = (props) => {
  return (
    <div className="container">
      {props.lable && <lable>{props.lable}</lable>}
      <input type="text" {...props} />
    </div>
  );
};

export default InputController;
