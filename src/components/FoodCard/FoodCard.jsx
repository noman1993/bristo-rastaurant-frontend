import React from "react";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <p className="absolute right-0 bg-slate-900 text-white mr-3 mt-3">${price}</p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
