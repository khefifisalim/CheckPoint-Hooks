import React from "react";
import StarRatings from "react-star-ratings";
import { Card } from "react-bootstrap";

const MovieCard = ({ movie }) => {
  const { Title, imgUrl, Description, Rate } = movie;
  return (
    <div style={{ margin: "5px" }}>
      <Card style={{ width: "16rem", height: "22rem" }}>
        <Card.Img
          style={{ height: "70%", width: "100%" }}
          variant="top"
          src={imgUrl}
        />
        <Card.Body>
          <Card.Title>{Title}</Card.Title>
          <div>
            <StarRatings
              rating={Rate}
              starRatedColor="yellow"
              starDimension="20px"
              numberOfStars={5}
              name="rating"
            />
          </div>
          <p className="descrip">Description:</p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
