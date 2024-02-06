import React, {useEffect, useRef, useState} from "react";
import "./valentinesInvite.scss";

const ValentinesInvite = () => {
  const noButtonRef = useRef(null);
  const [showNoButton, setShowNoButton] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [yesButtonText, setYesButtonText] = useState("Yes");
  const [buttonSize, setButtonSize] = useState(100); // Initial size in percent

  useEffect(() => {
    const noButton = noButtonRef.current;
    if (!noButton) return;

    const handleMouseMove = e => {
      const x = e.pageX;
      const y = e.pageY;
      const buttonRect = noButton.getBoundingClientRect();
      const buttonX = buttonRect.left + buttonRect.width / 2;
      const buttonY = buttonRect.top + buttonRect.height / 2;

      let diffX = x - buttonX;
      let diffY = y - buttonY;

      diffX = diffX * -10;
      diffY = diffY * -10;

      // Check horizontal boundaries
      if (buttonRect.left + diffX < 0) {
        diffX = -buttonRect.left;
      } else if (buttonRect.right + diffX > window.innerWidth) {
        diffX = window.innerWidth - buttonRect.right;
      }

      // Check vertical boundaries
      const newTop = buttonRect.top + diffY;
      const newBottom = buttonRect.bottom + diffY;
      if (newTop < 0) {
        diffY = -buttonRect.top;
      } else if (newBottom > window.innerHeight) {
        diffY = window.innerHeight - buttonRect.bottom;
      }

      noButton.style.transform = `translate(${diffX}px, ${diffY}px)`;
    };

    noButton.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener
    return () => {
      noButton.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleYesClick = () => {
    setButtonSize(buttonSize => Math.min(buttonSize + 10, 300)); // Increase size by 10%
    setYesButtonText(text => {
      switch (text) {
        case "Yes":
          return "Definitely!";
        case "Definitely!":
          return "Absolutely!";
        case "Absolutely!":
          return "Yes";
        default:
          return "Yes";
      }
    });
  };

  return (
    <div className="valentines-invite">
      <h1>Valentine's Day Invitation</h1>
      <p>Will you be my Valentine?</p>
      <div className="button-container">
        <button
          className="yes-button"
          onClick={handleYesClick}
          style={{fontSize: `${buttonSize}%`}}
        >
          {yesButtonText}
        </button>
        <button className="no-button" ref={noButtonRef}>
          No
        </button>
      </div>
    </div>
  );
};

export default ValentinesInvite;
