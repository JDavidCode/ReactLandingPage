import * as React from "react";
import PropTypes from "prop-types";

function WidePaperPost({ post }) {
  return (
    <div
      className="relative mt-8 bg-gray-800 text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${post.image})` }}
    >
      <img className="hidden" src={post.image} alt={post.imageLabel} />
      <div className="absolute inset-0 bg-black bg-opacity-30" />

      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="relative p-6 md:p-12 max-w-md">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {post.title}
            </h1>
            <p className="text-lg mb-6">{post.content}</p>
            <a
              href="#"
              className="text-blue-300 text-lg font-medium hover:underline"
            >
              {post.linkText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

WidePaperPost.propTypes = {
  post: PropTypes.shape({
    content: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default WidePaperPost;
