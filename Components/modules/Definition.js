import styles from "./Definition.module.css";
import clsx from "clsx";
const Definition = ()=> {
  return (
    <div className={clsx(styles.definitionContainer , "section container")}>
      <h3>Who We Are?</h3>
      <p>
        Food Recipes company was founded in 2024 by Sina Afshari.The company began food delivery in August 2024 with the launch
        of the UberFRESH service in Santa Monica, California. In 2025, the
        platform was renamed to UberEATS and the ordering software was released
        as its own application, separate from the app for Uber rides.In 2016, it
        commenced operations in both London and Paris.
      </p>
    </div>
  );
}

export default Definition;
