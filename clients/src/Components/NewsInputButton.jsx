export const NewsInputBox = ({ value, onChange }) => {
  return (
    <div className="w-full max-w-3xl text-xl font-bold mx-auto mt-10 px-4">
      <label className="block mb-2 text-lg font-medium text-gray-700 dark:text-gray-300">
        📰 Enter News Headline or Article:
      </label>

      <textarea
        rows={6}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="e.g., Government approves new education policy..."
        className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
      />
    </div>
  );
};
