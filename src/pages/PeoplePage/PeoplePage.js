import React from "react";
import "./PeoplePage.css";
import ListLayout from "../../Layouts/ListLayout/ListLayout";

const PeoplePage = () => {
  return (
    <ListLayout
      url="people"
      titleKey="name"
      textKey="birth_year"
      name="Person"
    />
  );
};

export default PeoplePage;
