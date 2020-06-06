import React from "react";
import "./ProfileCard.css";

import Card from "../Card/Card";
import Button from "../Button/Button";
import Text from "../Text/Text";
import Image from "../Image/Image";

const ProfileCard = ({
  title,
  text,
  buttonText,
  onButtonClick,
  imgSrc,
  imgAlt,
  children,
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
        <Button onClick={onButtonClick} color="red">
          {buttonText}
        </Button>
      </div>
    </Card>
  );
};

export default ProfileCard;
