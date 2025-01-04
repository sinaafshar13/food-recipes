import React, { useEffect, useState } from "react";
import Card from "../modules/Card";
import clsx from "clsx";
import styles from "./CategoriesPage.module.css";
import { useRouter } from "next/router";

const CategoriesPage = ({ data }) => {
  const router = useRouter();
  const [query, setQuery] = useState({});
  const timeHandler = (e) => {
    const { name, value } = e.target;
    const newQuery =
      value === "None"
        ? (() => {
            const { [name]: _, ...rest } = query;
            return rest;
          })()
        : { ...query, [name]: value };
    setQuery(newQuery);
    router.push({ pathname: "/category", query: newQuery });
  };
  const [items, setItems] = useState([
    {
      title: "Time categories",
      isOpen: true,
    },
  ]);
  useEffect(() => {
    const { Difficulty, time, search } = router.query;

    if (
      query.Difficulty !== Difficulty ||
      query.time !== time ||
      query.search !== search
    )
      setQuery({ Difficulty, time, search });
  }, [router.query]);
  const toggleAccordion = (index) => {
    setItems((prevState) =>
      prevState.map((item, i) =>
        i === index ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  const searchHandler = (e) => {
    const { value, name } = e.target;
    const newQuery =
      value === ""
        ? (() => {
            const { [name]: _, ...rest } = query;
            return rest;
          })()
        : { ...query, [name]: value };
    setQuery(newQuery);
    router.push({ pathname: "/category", query: newQuery });
  };

  const toggleFilter = (e) => {
    const { value, name } = e.target;
    const newQuery =
      value === "All"
        ? (() => {
            const { [name]: _, ...rest } = query;
            return rest;
          })()
        : { ...query, [name]: value };
    setQuery(newQuery);
    router.push({ pathname: "/category", query: newQuery });
  };

  return (
    <main className={styles.main}>
      <section className={`${styles.categories} container section`}>
        <div className={styles.categoriesHeaderContainer}>
          <h2 className="sectionTitle">Category</h2>
          <div className={styles.categoriesSearchContainer}>
            <input
              onChange={searchHandler}
              value={query.search || ""}
              type="text"
              name="search"
              className={styles.searchContainerInput}
              placeholder="Search..."
            />
            <button
              onClick={() =>
                router.push({ pathname: "/category", query: query })
              }
              className={`${styles.button} ${styles.buttonFlex} ${styles.searchContainerButton}`}
            >
              <i
                className={clsx(
                  "bx bx-search",
                  styles.searchContainerButtonIcon
                )}
              ></i>
              Search
            </button>
          </div>
        </div>

        <div className={styles.categoriesFilters}>
          {["All", "Hard", "Medium", "Easy"].map((value) => (
            <div key={value}>
              <input
                type="radio"
                name="Difficulty"
                value={value}
                id={value}
                checked={value === (query.Difficulty || "All")}
                onChange={toggleFilter}
                className={styles.categoriesFilter}
              />
              <label htmlFor={value}>{value}</label>
            </div>
          ))}
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
                  aria-expanded={item.isOpen}
                >
                  {item.title}
                  <span className={styles.accordionIcon}>
                    {item.isOpen ? (
                      <i className="bx bxs-chevron-up"></i>
                    ) : (
                      <i className="bx bxs-chevron-down"></i>
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
                  <div className={styles.accordionContentTexts}>
                    {["None", "Less", "More"].map((value) => (
                      <div key={value} >
                        <input
                          type="radio"
                          name="time"
                          value={value}
                          id={value}
                          onChange={timeHandler}
                          checked={value === (query.time || "None")}
                          className={styles.accordionContentText}
                        />
                        <label htmlFor={value}>
                          {value === "None" ? "None" : `${value} than 30 mins`}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {data.length === 0 ? (
            <p className={styles.emptySearchAlert}>
              Sorry, no results found. Try refining your search!
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
