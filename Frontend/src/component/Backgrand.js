import React, { useState } from "react";
import data from "../asset/data";

export const Backgrand = () => {
  const [backgrand, setBackgrand] = useState(data);
  return (
    <div className="backgrand-container">
      {backgrand.map((back) => {
        const { id, name, image } = back;
        return (
          <div className="backgrand-item" key={id}>
            <img src={image} alt={name} className="back-img" />
          </div>
        );
      })}
    </div>
  );
};
