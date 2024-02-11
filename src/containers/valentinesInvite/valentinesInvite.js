import React, {useEffect, useRef, useState} from "react";
import {toast} from "react-toastify";
import "./valentinesInvite.scss";
import Shawty from "../../containers/shawty/shawty";

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
      toast("Dafuq?????????????????????????", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored"
      });
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
          return "SHAWTY BOPS FR FR?!";
        case "SHAWTY BOPS FR FR?!":
          return "CLICK ME AGAIN PLEASE PHYSICAL TOUCH HAMOOT";
        case "CLICK ME AGAIN PLEASE PHYSICAL TOUCH HAMOOT":
          return "I NEED MORE AFFIRMATION";
        case "I NEED MORE AFFIRMATION":
          return "Okay khalas sadda2tk";
        default:
          return "KFAYYAAAAAAA";
      }
    });
  };

  useEffect(() => {
    if (
      yesButtonText === "Okay khalas sadda2tk" ||
      yesButtonText === "KFAYYAAAAAAA"
    ) {
      window.scrollTo({
        top: document.body.scrollHeight / 3,
        behavior: "smooth" // for smooth scroll
      });
    }
  }, [yesButtonText]);

  return (
    <div>
      <div className="valentines-invite">
        <div className="iframe-wrapper">
          <iframe
            src="https://giphy.com/embed/1wmOyZYoGzz003R03Y"
            width="240"
            height="126"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          ></iframe>
          <div className="iframe-overlay"></div>
        </div>
        <h1>💗 Valentine's Day Invitation 💗</h1>
        <p>💞💞💞 Will you be my Valentine? 💞💞💞</p>
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
        <div className="iframe-wrapper">
          <iframe
            src="https://giphy.com/embed/GMUTanoEMDhUEcsnPs"
            width="240"
            height="126"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          ></iframe>
          <div className="iframe-overlay"></div>
        </div>
      </div>
      {yesButtonText === "Okay khalas sadda2tk" ||
      yesButtonText === "KFAYYAAAAAAA" ? (
        <Shawty />
      ) : null}
    </div>
  );
};

export default ValentinesInvite;
