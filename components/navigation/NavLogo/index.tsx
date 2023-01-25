import Link from "next/link";
import Styles from "./Styles.module.scss";

export default function NavLogo() {
  return (
    <Link href="/" className={Styles.nav_logo}>
      Fidelis <span className={Styles.nav_okeke}>Okeke</span>
    </Link>
  );
}
