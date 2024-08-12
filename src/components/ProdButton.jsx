import React from "react";
// "See Products" button which displays the products on a click. (Setup in home.jsx)

const ProdButton = ({ onClick }) => {
  return (
    <button className="prodbtn" onClick={onClick}>
      See Products
    </button>
  );
};

export default ProdButton;
