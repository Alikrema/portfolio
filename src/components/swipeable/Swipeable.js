import React from "react";
import SwipeableViews from "react-swipeable-views";
import {autoPlay} from "react-swipeable-views-utils";
import styled from "styled-components";

const GalleryContainer = styled.div`
  width: 100%;
  max-width: 600px; // Adjust as needed
  height: auto;
  margin: 0 auto;
`;

const Image = styled.img`
  width: 80%;
  height: 100%;
  display: block;
  border-radius: 500px;
  margin-left: auto;
`;

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

class PhotoGallery extends React.Component {
  state = {
    index: 0
  };

  handleChangeIndex = index => {
    this.setState({index});
  };

  render() {
    const {images} = this.props; // Expect an array of image URLs

    return (
      <GalleryContainer>
        <AutoPlaySwipeableViews
          index={this.state.index}
          onChangeIndex={this.handleChangeIndex}
          enableMouseEvents
        >
          {images.map((image, index) => (
            <Image key={index} src={image} alt={`Slide ${index}`} />
          ))}
        </AutoPlaySwipeableViews>
      </GalleryContainer>
    );
  }
}

export default PhotoGallery;
