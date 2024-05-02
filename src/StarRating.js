import React from "react";

const StarRating = ({ maxRating = 5}) => {
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  };

  const starStyle = {
    display: "flex",
    gap: "4px",
  };

  const textStyle = {
    lineHeight: "0",
    margin: "0",
  };
  return (
    <div style={containerStyle}>
      <div style={starStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <span key={i}>S{i + 1}</span>
        ))}
      </div>
      <p style={textStyle}>10</p>
    </div>
  );
};

export default StarRating;
