import React from "react";

const Slogan = () => {
  const sloganStyle = {
    width: "100%",
    height: "50vh",
    backgroundImage: `url("/Images/banner.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "white",
  };

  const sloganContent = {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: "20px",
    borderRadius: "8px",
  };
  return (
    <div style={sloganStyle}>
      <div style={sloganContent}>
        <h1>
          Hockey Town
          <br />
          The coolest sport on earth.
        </h1>
        <br />

        <br />
        <p>
          At Hockey Town, we provide a wide range of products
          <br /> that get you prepared for the upcoming season.
        </p>
      </div>
    </div>
  );
};

export default Slogan;
