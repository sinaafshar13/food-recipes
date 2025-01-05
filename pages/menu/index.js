import React from "react";
import MenuPage from "../../Components/templates/MenuPage";

const index = ({data}) => {    
  return <MenuPage data={data}/>;
};

export default index;

export async function getStaticProps() {
  const res = await fetch(`${process.env.BASE_URL}data/`);
  const data = await res.json();
  return {
    props: {data},
    revalidate: 1*60*60
  };
}
