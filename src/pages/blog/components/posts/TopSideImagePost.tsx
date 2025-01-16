import * as React from "react";
import PropTypes from "prop-types";

function TopSideImagePost({ post }) {
  return (
    <div className="m-4">
      <a href="#" className="block hover:shadow-lg rounded-lg overflow-hidden">
        {/* Imagen en la parte superior */}
        <img
          className="w-full h-40 object-cover"
          src={post.image}
          alt={post.imageLabel}
        />
        {/* Contenido debajo de la imagen */}
        <div className="p-4 bg-white">
          <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
          <p className="text-sm text-gray-500 mb-4">{post.date}</p>
          <p className="text-base text-gray-700 mb-4">{post.content}</p>
          <p className="text-blue-600 font-medium">Continue reading...</p>
        </div>
      </a>
    </div>
  );
}

TopSideImagePost.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default TopSideImagePost;
