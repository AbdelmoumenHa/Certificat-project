import React, { useState } from "react";
import certificat from "../asset/certifModel";
import { Link } from "react-router-dom";

export const Certif = () => {
  const [certificatModel, setCertificatModel] = useState(certificat);
  console.log(certificatModel);
  return (
    <>
      <h1 className="title-certifes">les modeles de Certif</h1>

      <div className="certif-container">
        {certificatModel.map((certificate) => {
          const { id, name, image } = certificate;
          return (
            <Link to={`/certificat/${id}`}>
              <div key={id} className="certif-item">
                <div className="certif-img-container">
                  <img src={image} alt={name} className="certif-img-item" />
                </div>
                <div className="certif-cover"> </div>
                <h4 className="certif-item-title">{name}</h4>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};
