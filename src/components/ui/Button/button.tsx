import "./styles.scss";
import classNames from "classnames";
import React from "react";

interface ButtonProp {
  classname?: string;
  label?: string | React.ReactNode;
  onclick?: () => void;
  ondblClick?: () => void;
}
function Button({ classname, label, onclick, ondblClick }: ButtonProp) {
  const classes = classNames("btn-wrapper", classname);
  return (
    <button className={classes} onClick={onclick} onDoubleClick={ondblClick}>
      {label}
    </button>
  );
}

export default Button;
