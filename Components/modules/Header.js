import styles from "./Header.module.css";
import Link from "next/link";
import clsx from "clsx";

const Header = () => {
  const navItems = [
    { href: "/menu", label: "Menu" },
    { href: "/category", label: "Category" },
  ];

  return (
    <header className={styles.header}>
      <nav
        className={clsx("container", styles.nav)}
        aria-label="Main navigation"
      >
        <Link href="/" className={styles.navLogo}>
          FOOD RECIPES{" "}
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
