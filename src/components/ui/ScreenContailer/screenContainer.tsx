import { ReactNode, memo } from "react";
import "./styles.scss";
import classNames from "classnames";
interface ContainerProp {
  children?: ReactNode;
  classname?: string;
}

function Container(props: ContainerProp) {
  const { children, classname } = props;
  const classes = classNames("screen-container", classname);

  return <div className={classes}>{children}</div>;
}

export default memo(Container);
