import Link from "next/link";
import styles from "./Card.module.css";
import Image from "next/image";
import clsx from "clsx";

const Card = (props) => {
  const { id, name, price, details, discount } = props;
  return (
    <div className={styles.menuCard}>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.cardImage}
          src={`/images/${id}.jpeg`}
          alt="Car"
          width={300}
          height={200}
        />
        {discount ? (
          <span className={styles.cardDiscount}>
            <i className="bx bxs-offer"></i>
            {discount}
          </span>
        ) : null}
      </div>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardName}>
          {name}
        </h3>
      </div>
      <div className={styles.cardInfos}>
        <div className={styles.cardInfo}>
          <div>
            <i className="bx bx-category"></i>{" "}
            <span className={styles.infosText}>{details[1].RecipeType}</span>
          </div>
          <div>
            <i className="bx bx-cool"></i>{" "}
            <span className={styles.infosText}>{details[2].Difficulty}</span>
          </div>
        </div>
        <div className={styles.cardInfo}>
          <div>
            <i className="bi bi-geo-alt"></i>{" "}
            <span className={styles.infosText}>{details[0].Cuisine}</span>
          </div>
          <div>
            <i className="bx bx-time"></i>
            <span className={styles.infosText}>{details[4]["Cooking Time"]}</span>
          </div>
        </div>
      </div>
      <div className={styles.cardPrice}>
        <span className={styles.priceText}>Price</span>
        <span className={styles.priceNumber}>
        {discount ? (
          <span className={styles.priceDiscount}>
            {(price * (100 - discount)) / 100}$ 
            <span className={styles.priceOrigin}>{price}$</span>
          </span>
        ) : (
          <span>{price}$</span>
        )}
        </span>
      </div>
      <Link href={`http://localhost:3000/menu/${id}`} className={clsx(styles.cardButton, "button")}>
        View Details
      </Link>
    </div>
  );
};

export default Card;
