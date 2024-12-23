import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles["footerContainer"]} container`}>
        <h1 className={styles["footerTitle"]}>Food Recipes / Next JS Project</h1>
        <ul className={styles["footerList"]}>
          <li>
            <a href="#about" className={styles["footerLink"]}>
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className={styles["footerLink"]}>
              Project
            </a>
          </li>
          <li>
            <a href="#testimonial" className={styles["footerLink"]}>
              Testimonials
            </a>
          </li>
        </ul>
        <div className={styles["footerSocial"]}>
          <a
            href="https://t.me/Cryptocoder19"
            className={styles["footerSocialIcon"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-telegram"></i>
          </a>
          <a
            href="https://github.com/sinaafshar13"
            className={styles["footerSocialIcon"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/sina-afshari-32b3bb288/"
            className={styles["footerSocialIcon"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
        <span className={styles["footerCopy"]}>
          &#169; Cryptocoder19. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
