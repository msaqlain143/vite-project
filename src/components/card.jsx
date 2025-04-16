import React from "react";
import photo from "../../public/Muhammad_Saqlain_Pic.jpg";
import "./cardstyle.css";
const Card = ({
  title = "Card Title",
  description = "This is a sample card.",
  image = "/Muhammad_Saqlain_Pic.jpg",
}) => {
  return (
    <div className="card w-sm bg-white rounded-2xl shadow-md overflow-hidden">
      <img src={photo} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4   box">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;
