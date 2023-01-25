import React, { PropsWithChildren } from "react";
import Styles from "./Styles.module.scss";

export default function Container(props: PropsWithChildren) {
  return <div className={Styles.container}>{props.children}</div>;
}
