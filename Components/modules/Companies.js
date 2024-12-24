import styles from "./Companies.module.css";
import SpaceX from "../icons/SpaceX";
import Tesla from "../icons/Tesla";
import Apple from "../icons/Apple";
import Binance from "../icons/Binance";
import clsx from "clsx";

const Companies = () => {
  return (
    <div className={clsx("container", styles.container)}>
      <Apple />
      <SpaceX />
      <Binance />
      <Tesla />
    </div>
  );
};

export default Companies;
