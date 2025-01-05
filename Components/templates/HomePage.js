import Attributes from "../modules/Attributes";
import Companies from "../modules/Companies";
import Definition from "../modules/Definition";
import Instruction from "../modules/Instruction";
import Guide from "../modules/Guide";
import Restrictions from "../modules/Restrictions";
import styles from "./HomePage.module.css";

import Hero from "../modules/Hero";
import CardSwiper from "../modules/CardSwiper";

const HomePage = ({data}) => {
  return (
    <>
      <Hero />
      <CardSwiper data={data}/>
      <Attributes />
      <Definition />
      <Companies />
      <Instruction />
      <Guide />
      <Restrictions />
    </>
  );
};

export default HomePage;
