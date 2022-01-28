import React from "react";
import "./Property1ImageFailed.css";

function Property1ImageFailed(props) {
  const { image, image794 } = props;

  return (
    <div className="image" style={{ backgroundImage: `url(${image})` }}>
      <img className="image-794" src={image794} />
    </div>
  );
}

export default Property1ImageFailed;
