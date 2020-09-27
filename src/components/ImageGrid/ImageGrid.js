import React, { Component } from "react";
import { connect } from "react-redux";
import { loadImages } from "../../actions";
import Button from '../Button';

import "./styles.css";

class ImageGrid extends Component {
  componentDidMount() {
    this.props.loadImages()
  }
  render() {
    const { images, error, isLoading, loadImages } = this.props;
    return (
      <div className="content">
        <section className="grid">
          {images.map(image => (
            <div
              key={image.id}
              className={`item item-${Math.ceil(image.height / image.width)}`}
            >
              <img src={image.urls.small} alt={image.user.username} />
            </div>
          ))}
        </section>
        {error && <div className='error'>{JSON.stringify(error)}</div>}
        <Button loading={isLoading} onClick={() => !isLoading && loadImages()}>Load Images</Button>
      </div>
    );
  }
}

const mapStateToProps = ({ isLoading, images, error }) => ({
  isLoading,
  images,
  error
});

const mapDispatchToProps = dispatch => ({
  loadImages: () => dispatch(loadImages())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageGrid);
