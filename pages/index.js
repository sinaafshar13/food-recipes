import React from "react";
import HomePage from "../Components/templates/HomePage";

const index = ({data}) => {
  return (
    <>
      <HomePage data={data}/>
    </>
  );
};

export default index;

export async function getStaticProps() {
  const res = await fetch(`${process.env.BASE_URL}data/`);
  const data = await res.json();
  return {
    props: {data},
  };
}