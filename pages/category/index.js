import React from "react";
import CategoriesPage from "../../Components/templates/CategoriesPage";

const categories = ({ data }) => {
  return <CategoriesPage data={data} />;
};

export default categories;

export async function getServerSideProps(context) {
  const {
    query: { Difficulty, search, time },
  } = context;
  const res = await fetch("http://localhost:5000/data");
  const data = await res.json();

  let filteredData = data;
  if (Difficulty) {
    filteredData = filteredData.filter((item) =>
      item.details.some((detail) => detail.Difficulty === Difficulty)
    );
  }
  if (search) {
    filteredData = filteredData.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }
  if (time) {
    filteredData = filteredData.filter((item) =>
      item.details.some((detail) => {
        const cookingTime = detail["Cooking Time"] || "";
        const [timeDetail] = cookingTime.split(" ");
        if (time === "Less" && timeDetail && +timeDetail <= 30) {
          return item;
        } else if (time === "More" && +timeDetail > 30) {
          return item;
        }
      })
    );
  }
  return {
    props: { data: filteredData },
  };
}
