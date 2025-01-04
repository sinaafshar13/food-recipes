import styles from "./Header.module.css";
import Link from "next/link";
import clsx from "clsx";
import Logo from "../icons/Logo";
import { useEffect, useRef } from "react";

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > 80) {
          headerRef.current.classList.add("headerBorder");
        } else {
          headerRef.current.classList.remove("headerBorder");
        }
      }
    };
  

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { href: "/menu", label: "Menu" },
    { href: "/category", label: "Category" },
  ];

  return (
    <header ref={headerRef} className={`${styles.header} header`}>
      <nav className={clsx("container", "nav")} aria-label="Main navigation">
        <Link href="/" className={styles.navLogo}>
          <Logo />
          Foodiato
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
