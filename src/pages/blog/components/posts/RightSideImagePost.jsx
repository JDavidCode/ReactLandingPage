import * as React from 'react';
import PropTypes from 'prop-types';

function RightSideImagePost({ post }) {
  return (
    <div className="mx-4">
      <a href="#" className="flex flex-col sm:flex-row rounded-lg overflow-hidden shadow-md hover:shadow-lg">
        {/* Contenido principal */}
        <div className="flex-1 p-4">
          <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
          <p className="text-sm text-gray-500 mb-4">{post.date}</p>
          <p className="text-base text-gray-700 mb-4">{post.content}</p>
          <p className="text-blue-600 font-medium">Continue reading...</p>
        </div>
        {/* Imagen a la derecha en pantallas medianas y grandes */}
        <img
          className="w-full h-40 object-cover sm:w-40 sm:h-auto"
          src={post.image}
          alt={post.imageLabel}
        />
      </a>
    </div>
  );
}

RightSideImagePost.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default RightSideImagePost;
