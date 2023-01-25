import Link from "next/link";
import { PropsWithChildren } from "react";
import Styles from "./Styles.module.scss";

interface NavListItemProp extends PropsWithChildren {
  href: string;
  active?: boolean;
}

export default function NavListItem(props: NavListItemProp) {
  return (
    <li className={Styles.nav_list_item}>
      <Link
        href={props.href}
        className={`${Styles.navLink} ${props.active ? Styles.active : ""}`}
      >
        {props.children}
      </Link>
    </li>
  );
}
