import Link from "next/link";
import styles from "./Card.module.css";
import Image from "next/image";
import clsx from "clsx";

const Card = (props) => {
  const { id, name, price, details, discount } = props;
  console.log(`/public/images/${id}.jpeg`);

  return (
    <div className={styles.menuCards}>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.cardsImage}
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
      <div className={styles.cardsHeader}>
        <h3 className={styles.cardsName}>
          {name} {}
        </h3>
        <div className={styles.cardsScore}>
          <div className={styles.scoresNumber}>{}</div>
        </div>
      </div>
      <div className={styles.cardsInfos}>
        <div className={styles.cardsInfo}>
          <div>
            <i class="bx bx-category"></i>{" "}
            <span className={styles.infosText}>{details[1].RecipeType}</span>
          </div>
          <div>
            <i class="bx bx-cool"></i>{" "}
            <span className={styles.infosText}>{details[2].Difficulty}</span>
          </div>
        </div>
        <div className={styles.cardsInfo}>
          <div>
            <i className="bi bi-geo-alt"></i>{" "}
            <span className={styles.infosText}>{details[0].Cuisine}</span>
          </div>
          <div>
            <i className="bx bx-user"></i>
            <span className={styles.infosText}>{details[5].Serves}</span>
          </div>
        </div>
      </div>
      <div className={styles.cardsPrice}>
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
      <Link href={`http://localhost:3000/menu/${id}`} className={clsx(styles.cardsButton, "button")}>
        View Details
      </Link>
    </div>
  );
};

export default Card;
