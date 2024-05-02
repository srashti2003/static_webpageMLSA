import React from "react";

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
    <div className="education">
      <div className="container">
        <div className="education-details">
          <h2 className="education-header">Education</h2>
          <div className="education-content">
            <div className="education-content__item">
              <h3 className="education-content__item-header">
                Bachelor of Technology in Computer Science and Engineering
              </h3>
              <p className="education-content__item-subheader">
                Samrat Ashok Technology Institute, Vidisha (M.P.), India
              </p>
              <p className="education-content__item-date">2021 - 2025</p>
            </div>
            <div className="education-content__item">
              <h3 className="education-content__item-header">
                High School & Higher Secondary School
              </h3>
              <p className="education-content__item-subheader">
                Govt. School for Excellence No.1, Chhatarpur (M.P.), India
              </p>
              <p className="education-content__item-date">2017 - 2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
//           src={image}
//             alt={imageAltText}
//             style={{ width: "100%", height: "auto" }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Education;
//
// // Path: src/Components/Education.jsx
// // Compare this snippet from src/Components/Portfolio.jsx:
