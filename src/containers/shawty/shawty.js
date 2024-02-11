import React, {useState, useEffect} from "react";
import "./shawty.scss"; // Ensure you have a SCSS loader configured

const Shawty = () => {
  const [letter, setLetter] = useState({Date: "", Content: ""});
  const [hideButton, setHideButton] = useState(false);
  const fetchRandomLetter = async () => {
    try {
      const response = await fetch("/shawty.json");
      const letters = await response.json();
      const randomIndex = Math.floor(Math.random() * letters.length);
      setLetter(letters[randomIndex]);
    } catch (error) {
      console.error("Error fetching letter:", error);
    }
  };

  useEffect(() => {
    fetchRandomLetter();
  }, []);

  const scrollFunc = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth" // for smooth scroll
    });
  };

  return (
    <div className="container">
      <div className="text-container">
        <h2>Every day is Valentine's with ma shawty bops</h2>
        <p>
          Your consistent love and how you show up every day is everything for
          me.
        </p>
        <p> Here's a glimpse of our 2023: </p>
      </div>
      <div className="iframe-wrapper">
        <iframe
          src="https://giphy.com/embed/9d3LQ6TdV2Flo8ODTU"
          width="240"
          height="126"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
        <div className="iframe-overlay"></div>
      </div>
      {!hideButton && (
        <button onClick={scrollFunc}>Click for love and affection</button>
      )}
      <div className="love-letter">
        <div className="letter-content">
          <p className="date">{letter.Date}</p>
          <p>{letter.Content}</p>
        </div>
        <button className="new-letter-btn" onClick={fetchRandomLetter}>
          ANOTHER ONE!
        </button>
      </div>
      <h2>Stay with me shawty 😘😘</h2>
    </div>
  );
};

export default Shawty;
