import React from "react";
import "./ProfileCard.css";

import Card from "../Card/Card";
import Text from "../Text/Text";
import Image from "../Image/Image";
import BtnLink from "../BtnLink/BtnLink";

const ProfileCard = ({
  title,
  text,
  buttonText,
  onButtonClick,
  imgSrc,
  imgAlt,
  children,
  linkPath,
  linkText
}) => {
  return (
    <Card rounded shadow>
      <div className="card-img">
        <Image
          src={imgSrc}
          alt={imgAlt}
          width="100%"
          height="100%"
          fit="cover"
        />
      </div>

      {!children ? (
        <div className="card-content">
          <Text title>{title}</Text>
          <Text>{text}</Text>
        </div>
      ) : (
        children
      )}

      <div className="card-actions">
       <BtnLink linkPath = {linkPath} linkText = {linkText} />
      </div>
    </Card>
  );
};

export default ProfileCard;
