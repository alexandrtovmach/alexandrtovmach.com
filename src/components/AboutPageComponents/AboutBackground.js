import React from "react";

import AlexSVGSrc from "../../styles/assets/images/alex.svg";

export default props => {
  // const generateStars = (count = 100) => {
  //   const arr = [];
  //   for (let i = 0; i <= count; i++) {
  //     arr.push(
  //       <div key={i} className="container">
  //         <div className="star" />
  //       </div>
  //     );
  //   }
  //   return arr;
  // };

  return (
    <div className="background-about">
      {/* <div className="stars">{generateStars(20)}</div> */}
      <img src={AlexSVGSrc} alt="it's me" className="alex-img" />
      <div className="alex-bubble">
        <div className="alex-bubble-content">
          <span>How create image like this?</span>
          <a href="https://youtube.com">Watch on my YouTube</a>
        </div>
      </div>
    </div>
  );
};
