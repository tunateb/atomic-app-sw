import React from "react";
import "./FilmsPage.css";
import ListLayout from "../../Layouts/ListLayout/ListLayout";

const FilmsPage = () => {
  return (
    <ListLayout
      url="films"
      titleKey="title"
      textKey="opening_crawl"
      name="Film"
    />
  );
};

export default FilmsPage;
