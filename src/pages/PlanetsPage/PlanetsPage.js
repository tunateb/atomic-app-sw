import React from "react";
import "./PlanetsPage.css";
// import ProfileCard from "../../components/ProfileCard/ProfileCard";
import ListLayout from "../../Layouts/ListLayout/ListLayout";

const PlanetsPage = () => {
  return <ListLayout url="planets" titleKey="name" textKey="terrain" name="Planet"  />;
};

export default PlanetsPage;
