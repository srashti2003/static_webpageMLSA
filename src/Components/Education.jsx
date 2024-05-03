import React from "react";
import image from "../images/eduimage.jpg";

const imageAltText = "simple education page bg";

/**
 * Education component
 *  
 * This component highlights your educational background. This can include
 * your degrees, certifications, online courses, and more.
 *  
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and grow.
 */
const Education = () => {
  return (
    <div id="education">
    <div  className="education" style={{ backgroundColor: "#f0f0f0", padding: "50px 0" }}>
      <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div className="education-details">
          <h2 className="education-header" style={{ textAlign: "center", marginBottom: "30px" }}>Education</h2>
          <div className="education-content">
            <div className="education-content__item" style={{ marginBottom: "20px" }}>
              <h3 className="education-content__item-header" style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>
                Bachelor of Technology in Computer Science and Engineering
              </h3>
              <p className="education-content__item-subheader" style={{ fontSize: "18px", color: "#666", marginBottom: "5px" }}>
                Samrat Ashok Technology Institute, Vidisha (M.P.), India
              </p>
              <p className="education-content__item-date" style={{ fontSize: "16px", color: "#999", marginBottom: "20px" }}>2021 - 2025</p>
            </div>
            <div className="education-content__item" style={{ marginBottom: "20px" }}>
              <h3 className="education-content__item-header" style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>
                High School & Higher Secondary School
              </h3>
              <p className="education-content__item-subheader" style={{ fontSize: "18px", color: "#666", marginBottom: "5px" }}>
                Govt. School for Excellence No.1, Chhatarpur (M.P.), India
              </p>
              <p className="education-content__item-date" style={{ fontSize: "16px", color: "#999", marginBottom: "20px" }}>2017 - 2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Education;
