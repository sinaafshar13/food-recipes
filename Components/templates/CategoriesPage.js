import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Card from "../modules/Card";

import styles from "./CategoriesPage.module.css";
import { useRouter } from "next/router";

const CategoriesPage = ({ data }) => {
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [sortType, setSortType] = useState("");
  const accordionRef = useRef(null);
  const [itemToggle, setItemToggle] = useState(0);
  const [items, setItems] = useState([
    {
      title: "Sorting categories",
      content: (
        <div className={styles.accordionContentTexts}>
          <label>
            <input
              onChange={(e) => setSortType(e.target.value)}
              type="radio"
              name="sorting"
              value="less"
            />
            <span className={styles.accordionContentText}>
              Less than 30 min
            </span>
          </label>
          <label>
            <input
              onChange={(e) => setSortType(e.target.value)}
              type="radio"
              name="sorting"
              value="more"
            />
            <span className={styles.accordionContentText}>
              More than 30 min
            </span>
          </label>
        </div>
      ),
      isOpen: true,
    },
  ]);
  const toggleAccordion = (index) => {
    setItems((prevState) =>
      prevState.map((item, i) =>
        i === index
          ? { ...item, isOpen: !item.isOpen }
          : { ...item, isOpen: false }
      )
    );
  };

  const searchHandler = (e) => {
    router.push({ pathname: "/category", query: { search: e.target.value } });
  };
  const toggleFilter = (index) => {
    setItemToggle(index);
    if (index === 0) router.push({ pathname: "/category" });
    else if (index === 1)
      router.push({ pathname: "/category", query: { Difficulty: "Hard" } });
    else if (index === 2)
      router.push({ pathname: "/category", query: { Difficulty: "Medium" } });
    else if (index === 3)
      router.push({ pathname: "/category", query: { Difficulty: "Easy" } });
  };

  const timeHandler = (e) => {
    router.push({ pathname: "/category", query: { time: "Hard" } });
  };

  return (
    <main className={styles.main}>
      <section className={`${styles.categories} container section`}>
        <div className={styles.categoriesHeaderContainer}>
          <h2 className="sectionTitle">Categories List</h2>
          <div className={styles.categoriesSearchContainer}>
            <input
              onChange={searchHandler}
              type="text"
              className={styles.searchContainerInput}
            />
            <button
              onClick={searchHandler}
              className={`${styles.button} ${styles.buttonFlex} ${styles.searchContainerButton}`}
            >
              <i
                className={`${styles.bx} ${styles["bx-search"]} ${styles.searchContainerButtonIcon}`}
              ></i>
              Search
            </button>
          </div>
        </div>

        <div className={styles.categoriesFilters}>
          <span
            onClick={() => toggleFilter(0)}
            className={
              itemToggle === 0
                ? `${styles.categoriesFilter} ${styles.categoriesFilterActive}`
                : styles.categoriesFilter
            }
          >
            All
          </span>
          <span
            onClick={() => toggleFilter(1)}
            className={
              itemToggle === 1
                ? `${styles.categoriesFilter} ${styles.categoriesFilterActive}`
                : styles.categoriesFilter
            }
          >
            Hard
          </span>
          <span
            onClick={() => toggleFilter(2)}
            className={
              itemToggle === 2
                ? `${styles.categoriesFilter} ${styles.categoriesFilterActive}`
                : styles.categoriesFilter
            }
          >
            Medium
          </span>
          <span
            value="Easy"
            onClick={() => toggleFilter(3)}
            className={
              itemToggle === 3
                ? `${styles.categoriesFilter} ${styles.categoriesFilterActive}`
                : styles.categoriesFilter
            }
          >
            Easy
          </span>
        </div>

        <div className={styles.categoriesSection}>
          <div className={styles.categoriesAccordion}>
            {items.map((item, index) => (
              <div key={index} className={styles.accordionItem}>
                <div
                  className={
                    item.isOpen
                      ? `${styles.accordionHeader} ${styles.open}`
                      : styles.accordionHeader
                  }
                  onClick={() => toggleAccordion(index)}
                >
                  {item.title}
                  <span>
                    {item.isOpen ? (
                      <i
                        className={`${styles.bx} ${styles["bxs-chevron-up"]}`}
                      ></i>
                    ) : (
                      <i
                        className={`${styles.bx} ${styles["bxs-chevron-down"]}`}
                      ></i>
                    )}
                  </span>
                </div>
                <div
                  className={
                    item.isOpen
                      ? `${styles.accordionContent} ${styles.showContent}`
                      : styles.accordionContent
                  }
                >
                  {item.content}
                </div>
              </div>
            ))}
          </div>

          {data.length === 0 ? (
            <p className={styles.emptySearchAlert}>
              !!!Sorry we don't find any food that match... try again please
            </p>
          ) : (
            <div className={styles.categoriesContainer}>
              {data.map((category) => (
                <div key={category.id}>
                  <Card {...category} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default CategoriesPage;
