import React, {useState, useEffect} from "react";
import "./TextSwitch.css"; // Import your CSS file

const TextSwitcher = textArray => {
  const texts = ["Text 1", "Text 2", "Text 3"]; // Your texts
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(currentIndex => (currentIndex + 1) % texts.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="roller">
      <span id="rolltext">
        HTML
        <br />
        CSS
        <br />
        Curiosity
        <br />
        <span id="spare-time">too much spare time?</span>
        <br />
      </span>
    </div>
  );
};

export default TextSwitcher;
