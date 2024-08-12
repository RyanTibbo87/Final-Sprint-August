import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-page">
      <h2>Welcome to the about page!</h2>
      <br />
      <img
        src="/Images/hockey.jpg"
        alt="Pet Photo"
        style={{
          width: "600px",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      />
      <br />

      <h4>
        Whether you're looking for the perfect stick, the sharpest skates, or a
        puck to get the game started, we have it all.
        <br /> Go to the Home Page and select "See Products" to view our
        selection.
      </h4>
      <br />
      {/* When you click the "Go Back" button it will go back to the home page. */}
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default About;
