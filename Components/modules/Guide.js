import Link from "next/link";
import styles from "./Guide.module.css";
import clsx from "clsx";

const Guide = () => {
  return (
    <div className={clsx("container", styles.guideContainer)}>
      <Link
        href="/menu"
        className={clsx(styles.guideButton, "button", "buttonFlex")}
      >
        <i className="bx bxs-food-menu"></i> Menu
      </Link>
      <Link
        href="/category"
        className={clsx(styles.guideButton, "button", "buttonFlex")}
      >
        <i className="bx bxs-dashboard"></i>
        Category
      </Link>
      <Link
        href="/"
        className={clsx(styles.guideButton, "button", "buttonFlex")}
      >
        <i className="bx bxs-discount"></i>
        Discount
      </Link>
    </div>
  );
};

export default Guide;
