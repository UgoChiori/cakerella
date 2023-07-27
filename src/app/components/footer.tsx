
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-white border border-teal bg-teal-200">
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Socials */}
        <div className="text-center md:text-left mb-8 md:mb-0">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Socials</h3>
          <div className="flex flex-col space-y-4">
            <a
              href="https://www.instagram.com/cakerella_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium text-gray-800"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/cakerella/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium text-gray-800"
            >
              Facebook
            </a>
            <a
              href="https://www.twitter.com/cakerella_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium text-gray-800"
            >
              Twitter
            </a>
          </div>
        </div>

        {/* Legal */}
        <div className="text-center md:text-right">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Legal</h3>
          <div className="flex flex-col space-y-4">
            <a href="/privacy" className="text-lg font-medium text-gray-800">
              Privacy Policy
            </a>
            <a href="/terms" className="text-lg font-medium text-gray-800">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;