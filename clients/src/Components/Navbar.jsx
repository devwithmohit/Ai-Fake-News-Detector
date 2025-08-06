export const Navbar = () => {
  return (
    <nav className="w-full shadow-md bg-white dark:bg-gray-900 px-4 py-3 flex justify-between items-center">
      {/* Left side Menu */}
      {/* Project Title */}
      <div className="text-2xl font-semibold text-blue-600 dark:text-blue-400">
        🧠 Fake News Detector
      </div>

      {/* Right Side Menu */}
      <div className="flex items-center gap-4">
        {/* GitHub Link */}
        <a
          href="https://github.com/yourusername/fake-news-detector"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-600 hover:text-blue-500 dark:text-gray-300"
        >
          GitHub
        </a>

        {/* Theme Toggle (Optional) */}
        <button variant="ghost" onClick={() => toggleTheme()}>
          🌙
        </button>
      </div>
    </nav>
  );
};

// Dummy theme toggle (can be upgraded with useDarkMode hook)
const toggleTheme = () => {
  const html = document.documentElement;
  html.classList.toggle("dark");
};

export default Navbar;
