import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const BtnLink = ({ linkText, linkPath }) => {
  return (
    <Link to={linkPath}>
      <Button color="blue">{linkText}</Button>
    </Link>
  );
};

export default BtnLink;
