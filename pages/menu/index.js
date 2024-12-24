import React from "react";
import MenuPage from "../../Components/templates/MenuPage";

const index = ({data}) => {    
  return <MenuPage data={data}/>;
};

export default index;

export async function getStaticProps() {
  const res = await fetch("http://localhost:5000/data");
  const data = await res.json();
  return {
    props: {data},
  };
}
