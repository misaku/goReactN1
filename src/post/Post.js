import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';

const Post = ({ data }) => (
  <section className="post">
    <PostHeader data={data} />
    <article>
      {data.message}
    </article>
  </section>
);

Post.propTypes = {
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
export default Post;
