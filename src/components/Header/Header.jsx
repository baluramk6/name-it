import React from "react";
import "./Header.css";

const Header = ({ headText }) => {
  return (
    <div className="head-container">
      <img
        src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
        alt="logo"
        className={`head-image ${
          headText.headerExpanded
            ? "head-image-expand"
            : "head-image-contracted"
        }`}
      />
      <h1
        className={`head-text ${
          headText.headerExpanded ? "head-text-expand" : "head-text-contracted"
        }`}
      >
        {headText.headerText}
      </h1>
    </div>
  );
};

export default Header;
