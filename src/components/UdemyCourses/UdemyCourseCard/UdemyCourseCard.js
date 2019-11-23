import React, { useEffect, useState } from "react";
import { Card, Icon, Image, Rating, Checkbox } from "semantic-ui-react";

const UdemyCourseCard = ({ cardData, s3Bucket }) => {
  const [showReview, setShowReview] = useState(false);
  return (
    <Card raised style={{ marginBottom: "3rem" }}>
      <Image src={`${s3Bucket}/${cardData.imgUrl}`} wrapped ui={false} />

      <Card.Content>
        <Card.Meta>
          <span className="date">By {cardData.author}</span>
        </Card.Meta>
        {showReview ? (
          <Card.Description>{cardData.review}</Card.Description>
        ) : (
          <div></div>
        )}
        <Card.Meta textAlign="right">
          <Icon
            name={showReview ? "chevron up" : "chevron down"}
            circular
            link
            onClick={() => setShowReview(!showReview)}
          />
        </Card.Meta>
        <br />
        <Checkbox label="Purchased" checked={cardData.purchased} />
        <br />
        <Checkbox label="Started" checked={cardData.started} />
        <br />
        <Checkbox label="Completed" checked={cardData.completed} />
        <br />
        <br />
        <Card.Meta>
          <Rating
            icon="star"
            defaultRating={cardData.rating}
            maxRating={5}
            disabled
          />
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <a href={cardData.link}>
          <Icon name="linkify" />
          View on Udemy
        </a>
      </Card.Content>
    </Card>
  );
};

export default UdemyCourseCard;
