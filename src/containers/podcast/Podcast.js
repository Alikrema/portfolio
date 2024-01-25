import React, {useContext} from "react";
import "./Podcast.scss";
import {podcastSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
export default function Podcast() {
  const {isDark} = useContext(StyleContext);

  if (!podcastSection)
    console.error("podcastSection object for Podcast section is missing");

  if (!podcastSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main">
        <div className="podcast-header">
          <h1 className="podcast-header-title">{podcastSection.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode podcast-header-subtitle"
                : "subTitle podcast-header-subtitle"
            }
          >
            {podcastSection.subtitle}
          </p>
        </div>
        <div className="podcast-main-div">
          {podcastSection.podcast.map((podcastLink, i) => {
            if (!podcastLink) {
              console.log(
                `Podcast link for ${podcastSection.title} is missing`
              );
              return null; // Return null to avoid rendering undefined elements
            }
            return (
              <div>
                {" "}
                {/* Encapsulate each podcast in a container */}
                <iframe
                  className="podcast"
                  src={podcastLink}
                  frameBorder="0"
                  scrolling="no"
                  title={`Podcast ${i}`} // Unique title for each podcast
                  style={{width: "100%", height: "100px", margin: "10px 0px"}}
                ></iframe>
              </div>
            );
          })}
        </div>

        <p>More Episodes...</p>
        <div className="social-icons-container">
          <a
            href={podcastSection.links.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="social-call-to-action youtube-call-to-action"
          >
            <i className="fab fa-youtube"></i>
          </a>
          <a
            href={podcastSection.links.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="social-call-to-action spotify-call-to-action"
          >
            <i className="fab fa-spotify"></i>
          </a>
          <a
            href={podcastSection.links.apple}
            target="_blank"
            rel="noopener noreferrer"
            className="social-call-to-action apple-podcasts-call-to-action"
          >
            <i className="fas fa-podcast"></i>
          </a>
          <a
            href={podcastSection.links.google}
            target="_blank"
            rel="noopener noreferrer"
            className="social-call-to-action google-podcasts-call-to-action"
          >
            <i className="fab fa-google"></i>
            <span className="icon-text">Google Podcasts</span>
          </a>
        </div>
      </div>
    </Fade>
  );
}
