import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full mt-60 py-4 border-t border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-center text-sm text-gray-600 dark:text-gray-400">
      <p>
        <a
          href="https://github.com/devwithmohit/Fake-News-Detector"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          {" "}
          View on GitHub
        </a>
      </p>
      <p className="mt-1">
        Built with ❤️ <strong>Bhai</strong>
      </p>
      <p className="mt-1 text-xs text-gray-400">
        Disclaimer: This is an AI-based demo. Results may not be 100% accurate.
      </p>
    </footer>
  );
};
