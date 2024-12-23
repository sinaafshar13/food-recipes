import Choice from "../icons/Choice";
import Clock from "../icons/Clock";
import Fast from "../icons/Fast";
import Food from "../icons/Food";
import styles from "./Attributes.module.css";
import clsx from "clsx";

function Attributes() {
  return (
    <div className={clsx("section container", styles.attributesContainer)}>
      <h3>Why us?</h3>
      <div className={styles.attributesContainerSub}>
        <div>
          <Fast />
          <p>Fast</p>
        </div>
        <div>
          <Food />
          <p>Best Restaurants</p>
        </div>
        <div>
          <Choice />
          <p>Your Choice</p>
        </div>
        <div>
          <Clock />
          <p>24-7</p>
        </div>
      </div>
    </div>
  );
}

export default Attributes;