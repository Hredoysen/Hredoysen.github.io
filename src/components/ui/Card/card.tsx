import classNames from "classnames";
import React from "react";
import { Image, Typography } from "antd";
import logo from "../../../assets/logo (1).png";
import "./styles.scss";

const { Title } = Typography;
interface ButtonProp {
  classname?: string;
  label?: string | React.ReactNode;
  onclick?: () => void;
  ondblClick?: () => void;
}
function Card({ classname, label, onclick, ondblClick }: ButtonProp) {
  const classes = classNames("card-wrapper", classname);
  return (
    <div className={classes} onClick={onclick} onDoubleClick={ondblClick}>
      <Image src={logo} preview={false} height={100} />
    </div>
  );
}

export default Card;
