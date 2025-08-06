export const ScoreMeter = ({ confidence }) => {
  const getBarColor = (value) => {
    if (value >= 80) return "bg-green-500";
    if (value >= 50) return "bg-yellow-500";
    return "bg-red-500";
  };
  return (
    <div className="w-full max-w-2xl mx-auto mt-4">
      <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
        AI Confidence Level:
      </label>
      <div className="w-full bg-gray-300 dark:bg-gray-700 h-4 rounded-full overflow-hidden">
        <div
          className={`h-4 ${getBarColor(
            confidence
          )} transition-all duration-500`}
          style={{ width: `${confidence}%` }}
        ></div>
        <div className="text-right text-sm mt-1 text-gray-600 dark:text-gray-400">
          {confidence}% confident
        </div>
      </div>
    </div>
  );
};
