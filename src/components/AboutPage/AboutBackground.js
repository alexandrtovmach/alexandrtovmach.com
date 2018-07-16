import React from "react";

export default (props) => {

  const generateStars = (count = 100) => {
    const arr = [];
    for (let i = 0; i <= count; i++) {
      arr.push(
        <div key={i} className="container">
          <div className="star"></div>
        </div>
      )
    }
    return arr;
  }

  return (
    <div className="background-about">
      <div className="stars">
        {generateStars(100)}
      </div>
    </div>
  )
}
