import styles from "./Header.module.css";
import Link from "next/link";
import clsx from "clsx";
import Logo from "../icons/Logo";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY > 80) {
        console.log(header?.classList.contains("headerBorder"));
        header?.classList.add("headerBorder");
      } else header?.classList.remove("headerBorder");
    };

    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },[] );

  const navItems = [
    { href: "/menu", label: "Menu" },
    { href: "/category", label: "Category" },
  ];

  return (
    <header className={`${styles.header} header`}>
      <nav
        className={clsx("container", "nav")}
        aria-label="Main navigation"
      >
        <Link href="/" className={styles.navLogo}>
          <Logo />
          Food Recipes
        </Link>
        <ul className={styles.navList}>
          {navItems.map(({ href, label }) => (
            <li key={href} className={styles.navItem}>
              <Link href={href} className={styles.navLink}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
