import React from "react";
import CategoriesPage from "../../Components/templates/CategoriesPage";

const categories = ({ data }) => {
  return <CategoriesPage data={data} />;
};

export default categories;

export async function getServerSideProps(context) {
  const {
    query: { Difficulty, search },
  } = context;
  console.log(Difficulty);

  const res = await fetch("http://localhost:5000/data");
  const data = await res.json();
  let filteredData = data;
  if (Difficulty) {
    filteredData = filteredData.filter((item) =>
      item.details.some((detail) => detail.Difficulty === Difficulty)
    );
  }

  // Filter by search if provided
  if (search) {
    filteredData = filteredData.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }
  return {
    props: { data: filteredData },
  };
}
