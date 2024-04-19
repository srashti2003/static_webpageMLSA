/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/portfolio-page.jpg";

const imageAltText = "organized desk with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Hit Hellion",
    description:
      "Implemented oops in python and pygame library to make diverse movements of Hellion to hit the enemies through gun and score high to win.",
    url: "https://github.com/srashti2003/pygame-hitHellion",
  },
  {
    title: "Fake News Detector",
    description:
      "Utilized nltk's features to preprocess text data and sklearn features to convert text into numeric form so that it identify the news real or fake.",
    url: "https://github.com/srashti2003/Fake-News-Detector",
  },
  {
    title: "Handwritten Digit Recognition",
    description:
      "Recognizes handwritten digits using sklearn and data visualization libraries of python to identify the digits.",
    url: "https://github.com/srashti2003/handwritten_digit_recognition",
  },
  {
    title: "Stock Price Prediction Model",
    description:
      "This model predicts the stock price Prediction of Amazon using LSTM Model. This is based on Deep Learning, RNN, ML concepts, numerical and textual analysis.",
    url: "https://github.com/srashti2003/stockprice_model",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
