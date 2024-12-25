import Card from "../modules/Card";
import styles from "./MenuPage.module.css";
import clsx from "clsx";
function MenuPage({data}) {  
  return (
    <div className={clsx("container section",styles.menuContainer)}>
      <h2>Menu</h2>
      <div className={styles.subMenuContainer}>
        {data.map((food) => (
          <Card key={food.id} {...food} />
        ))}
      </div>
    </div>
  );
}

export default MenuPage;
