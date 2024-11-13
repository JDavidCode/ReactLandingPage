import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BannerLight from '../../../assets/svg/Logo.svg';

function Header() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <header className="fixed w-full bg-transparent backdrop-blur-lg shadow-md z-50">
      <nav className="flex items-center justify-between px-4 py-2 border-b border-gray-200 dark:bg-gray-800">
        <Link to="/" className="flex-shrink-0">
          <div
            className="w-12 h-5 bg-cover"
            style={{
              backgroundImage: `url(${BannerLight})`,
            }}
          />
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link to="/blog" className="text-gray-900 dark:text-white hover:underline">Feed</Link>
          <Link to="/blog/updates" className="text-gray-900 dark:text-white hover:underline">Updates</Link>
          <Link to="/blog/community" className="text-gray-900 dark:text-white hover:underline">Community</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/login" className="text-blue-500 hover:underline">Sign in</Link>
          <Link to="/register" className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Sign up</Link>
        </div>

        <button
          className="md:hidden p-2"
          onClick={toggleDrawer(true)}
          aria-label="Open menu"
        >
        </button>
        
        {/* Mobile Drawer */}
        <div className={`fixed inset-0 bg-gray-900 bg-opacity-50 z-50 transform ${open ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`} onClick={toggleDrawer(false)}>
          <div className="absolute right-0 w-3/5 h-full dark:bg-gray-800 p-4">
            <button onClick={toggleDrawer(false)} className="text-gray-600 dark:text-gray-300">
              Close
            </button>
            <Link to="/blog" className="block my-2 text-gray-900 dark:text-white">Feed</Link>
            <Link to="/blog/updates" className="block my-2 text-gray-900 dark:text-white">Updates</Link>
            <Link to="/blog/community" className="block my-2 text-gray-900 dark:text-white">Community</Link>
            <div className="border-t border-gray-200 dark:border-gray-600 my-4"></div>
            <Link to="/register" className="block text-center my-2 bg-blue-500 text-white py-2 rounded-lg">Sign up</Link>
            <Link to="/login" className="block text-center my-2 border border-blue-500 text-blue-500 py-2 rounded-lg">Sign in</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

Header.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default Header;
