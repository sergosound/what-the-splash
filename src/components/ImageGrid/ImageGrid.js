import React, {Component} from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

import { loadImages } from '../../actions';
import Button from '../Button';
import Stats from '../Stats';

import './styles.css';

class ImageGrid extends Component {
  componentDidMount() {
    this.setHashUrl();
    this.props.loadImages()
  };

  componentDidUpdate(prevProps) {
    if (prevProps.nextPage !== this.props.nextPage) {
      this.setHashUrl();
    }
  };

  componentWillUnmount() {
    this.removeHashUrl();
  };

  setHashUrl() {
    const pageNumber = this.props.nextPage === 0 ? 1 : this.props.nextPage - 1;
    return window.location.hash = pageNumber;
  };

  removeHashUrl() {
    return window.location.href.split('#')[0];
  };

  render() {
    const { images, error, isLoading, loadImages, imageStats } = this.props;
    const errorMessage = error ? (<div className="error">{JSON.stringify(error)}</div>) : null;

    return (
      <div className="content">
        <section className="grid">
          {images.map(image => (
            <div
              key={image.id}
              className={`item item-${Math.ceil(
                image.height / image.width,
              )}`}
            >
              <Stats stats={imageStats[image.id]} />
              <img
                src={image.urls.small}
                alt={image.user.username}
              />
            </div>
          ))}
        </section>
        {errorMessage}
        <Button
          onClick={() => !isLoading && loadImages()}
          loading={isLoading}>
          Load More
        </Button>
      </div>
    );
  }
}

const mapStateToProps = ({ isLoading, images, error, nextPage, router, imageStats }) => ({
  isLoading,
  images,
  error,
  nextPage,
  router,
  imageStats
});
const mapDispatchToProp = {
  loadImages
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProp)
)(ImageGrid);
