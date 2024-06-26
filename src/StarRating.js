import React, { useState } from "react";
import Star from "./Star";
import PropTypes from "prop-types";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starStyle = {
  display: "flex",
};

const StarRating = ({
  maxRating = 5,
  color = "#ffc419",
  size = "48",
  classname = "",
  messages = [],
  onSetRating
}) => {
  StarRating.prototype = {
    maxRating: PropTypes.number,
    color: PropTypes.string,
    size: PropTypes.number,
    classname: PropTypes.string,
    messages: PropTypes.array,
    onSetRating: PropTypes.func,
  }
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);
  
  function handleRating(rating) {
    setRating(rating);
    onSetRating(rating);
  }

  const textStyle = {
    lineHeight: "0",
    margin: "0",
    fontSize: `${size}px`,
    color: color,
  };
  return (
    <div style={containerStyle} className={classname}>
      <div style={starStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onRate={() => handleRating(i + 1)}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            size={size}
            color={color}
          />
        ))}
      </div>
      <p style={textStyle}>
        {messages.length === maxRating
          ? messages[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ""}
      </p>
    </div>
  );
};

export default StarRating;
