export const SearchButton = ({ query }) => {
  function handleSearchClick() {
    if (!query) {
      return;
    }
    const encodedQuery = encodeURIComponent(query);
    const url = `https://www.google.com/search?q=${encodedQuery}`;
    window.open(url, "_blank");
  }

  return (
    <button
      onClick={handleSearchClick}
      className="mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg transition-all"
    >
      🔎 Search ON Web
    </button>
  );
};
