import React from "react";
import "./DateAndLogoWrapper.css"; // Import the CSS file for styling
import AveryFarmsLogo from "../assets/Avery_Farms_Logo-Teal.png"; // Adjust the path as necessary

const DateAndLogoWrapper = ({ children }) => {
  // Function to format the current date
  const formatDate = () => {
    const today = new Date();
    return `App Present Day: ${today.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    })}`;
  };

  return (
    <div className="wrapper">
      <div className="header-container"> {/* New container for logo and date text */}
        <div className="date-text">{formatDate()}</div>
        <img src={AveryFarmsLogo} alt="Avery Farms Logo" className="logo" />
      </div>
      {children} {/* This is where the card component will be rendered */}
    </div>
  );
};

export default DateAndLogoWrapper;
