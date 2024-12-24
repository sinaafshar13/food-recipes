import styles from "./Restrictions.module.css";
import clsx from "clsx";
function Restrictions() {
  return (
    <div className={clsx("section container " ,styles.restrictionsContainer)}>
      <h3>Restrictions</h3>
      <p>
        Prohibited items. Merchants may only offer to sell items expressly
        permitted by their agreement with Uber. A merchant cannot offer
        specially regulated or illicit items, like cannabidiol (CBD) and
        tetrahydrocannabinol (THC), on their Uber Eats menu.
      </p>
    </div>
  );
}

export default Restrictions;
