import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = ({ data }) => (
  <header>
    <img src={data.picture.thumbnail} alt={`${data.name.first} ${data.name.last}`} />
    <p>
      <strong>{`${data.name.first} ${data.name.last}`}</strong>
      <span>{data.time}</span>
    </p>


  </header>
);
PostHeader.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.shape({
      first: PropTypes.string.isRequired,
      last: PropTypes.string.isRequired,
    }).isRequired,
    picture: PropTypes.shape({
      large: PropTypes.string.isRequired,
      medium: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
    }).isRequired,
    gender: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }).isRequired,
};
export default PostHeader;
