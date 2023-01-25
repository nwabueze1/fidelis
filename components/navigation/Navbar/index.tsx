import React from "react";
import NavList from "../NavList";
import NavListItem from "../NavListItem";
import NavLogo from "../NavLogo";
import Styles from "./Styles.module.scss";
export default function Navbar() {
  return (
    <nav className={Styles.navbar}>
      <NavLogo />
      <NavList>
        <NavListItem href="/" active>
          #home
        </NavListItem>
        <NavListItem href="/">#works</NavListItem>
        <NavListItem href="/">#about-me</NavListItem>
        <NavListItem href="/">#contacts</NavListItem>
      </NavList>
    </nav>
  );
}
