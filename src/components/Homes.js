import React, { useEffect, useState } from "react";
import apiClient from "./../services/apiClient";

export default function Homes() {
  const [homesState, setHomesState] = useState([]);

  useEffect(() => {
    const homesDataPromise = apiClient.getHomes();

    homesDataPromise.then(
      (homesData) => console.log(homesData) || setHomesState(homesData)
    );
  }, []);

  let homes;

  homes = homesState.map((home, index) => {
    return (
      <div className="col-6 col-md-6 col-lg-4 col-xl-3 mb-3">
        <div data-testid="home" key={index} className="card w-100">
          <img
            data-testid="home-image"
            src={home.image}
            alt={home.title}
            className="card-img-top"
          />
          <div className="card-body">
            <div data-testid="home-title" className="card-title h5">{home.title}</div>
            <div data-testid="home-price">${home.price}/night</div>
            <div data-testid="home-location">{home.location}</div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="container m-2">
      <h1>Homes</h1>
      <div className="row">{homes}</div>
    </div>
  );
}
