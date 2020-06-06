import React from "react";
import "./Text.css";

const Text = ({ type, small = false, children, title }) => {
  const textClassses = `text text-${type} ${small ? "text-small" : ""} ${
    title ? "text-title" : ""
  }`;

  return <p className={textClassses}>{children}</p>;
};

export default Text;
