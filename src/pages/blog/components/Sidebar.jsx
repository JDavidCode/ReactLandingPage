import * as React from 'react';
import PropTypes from 'prop-types';

function Sidebar(props) {
  const { archives, description, social, title } = props;

  return (
    <div className="space-y-6">
      <div className="p-4 bg-gray-800 text-white rounded-lg">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p>{description}</p>
      </div>
      
      <div>
        <h2 className="text-lg font-semibold mt-4 mb-2">Archives</h2>
        <ul>
          {archives.map((archive) => (
            <li key={archive.title}>
              <a href={archive.url} className="block text-blue-500 hover:underline">
                {archive.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h2 className="text-lg font-semibold mt-4 mb-2">Social</h2>
        <ul>
          {social.map((network) => (
            <li key={network.name} className="mb-1">
              <a href="#" className="flex items-center space-x-2 text-blue-500 hover:underline">
                <network.icon className="w-5 h-5" />
                <span>{network.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  archives: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  description: PropTypes.string.isRequired,
  social: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Sidebar;
