import { PropsWithChildren } from "react";
import Styles from "./Styles.module.scss";
export default function NavList(props: PropsWithChildren) {
  return <ul className={Styles.nav_list}>{props.children}</ul>;
}
