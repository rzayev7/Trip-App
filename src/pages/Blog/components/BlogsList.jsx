import styles from "./BlogsList.module.scss";
import { blogArticles } from "../../../constants";
import ShortCard from "../../../components/ShortCard/ShortCard";
import React, { useEffect } from "react";
import { useState } from "react";

const BlogsList = () => {
  const choices = [
    "All articles",
    "Food & Drink",
    "Inspiration",
    "Local Guides",
    "See & Do",
    "Travel Tips",
    "Where to stay",
  ];

  const [articlesToShow, setArticlesToShow] = useState(blogArticles);
  const [selectedCategory, setSelectedCategory] = useState("All articles");

  useEffect(() => {
    if (selectedCategory === "All articles") {
      setArticlesToShow(blogArticles);
    } else {
      const filteredArticles = blogArticles.filter(
        (article) => article.title === selectedCategory
      );
      setArticlesToShow(filteredArticles);
    }
  }, [selectedCategory]);

  return (
    <section className={styles.blogsList}>
      <nav>
        <ul>
          {choices.map((choice) => (
            <li key={choice}>
              <button
              className={choice === selectedCategory ? styles.selected : ""}
                onClick={(e) => setSelectedCategory(e.target.value)}
                value={choice}
              >
                {choice}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      {articlesToShow.length > 0 ? (
        <div className={styles.articlesContainer}>
          {articlesToShow.map((article, index) => (
            <React.Fragment key={article.id}>
              <ShortCard
                item={article}
                extend={articlesToShow.length >= 5 && index < 2}
              />
              {index === 1 && <div className={styles.clearRow} />}
            </React.Fragment>
          ))}
        </div>
      ) : (
        <h2>No articles found</h2>
      )}
    </section>
  );
};

export default BlogsList;
