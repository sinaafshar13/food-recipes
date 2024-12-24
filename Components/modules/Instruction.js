import styles from "./Instruction.module.css";
import clsx from "clsx";

const Instruction = () => {
  return (
    <div className={clsx("container", styles.instructionContainer)}>
      <h3>How to Order?</h3>
      <ul>
        <li>
          {" "}
          <i className="bx bx-disc"></i> Sign in (or create an account) and set
          your delivery address.
        </li>
        <li>
          {" "}
          <i className="bx bx-disc"></i> Choose the restaurant you want to order
          from.
        </li>
        <li>
          {" "}
          <i className="bx bx-disc"></i> Select your items and tap “Add to
          Cart”.
        </li>
        <li>
          {" "}
          <i className="bx bx-disc"></i> To place your order, select “View cart”
          or “Checkout”.
        </li>
        <li>
          {" "}
          <i className="bx bx-disc"></i> Review your order and tap “Place
          Order”...
        </li>
        <li>
          {" "}
          <i className="bx bx-disc"></i> Track your order progress.
        </li>
      </ul>
    </div>
  );
};

export default Instruction;
