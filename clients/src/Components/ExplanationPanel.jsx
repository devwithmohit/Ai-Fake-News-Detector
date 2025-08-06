import React from "react";

export const ExplanationPanel = ({ explanation }) => {
  if (!explanation || !explanation.keywords?.length) return null;
  return (
    <div className="w-full max-w-2xl mx-auto mt-6 bg-gray-100 dark:bg-gray-800 p-5 rounded-lg shadow-md border border-gray-300 dark:border-gray-700">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
        AI Explanation
      </h3>

      <p className="mb-4 text-gray-700 dark:text-gray-300">
        {explanation.reason}
      </p>

      <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
        This decision was influenced by the following keywords:
      </p>
      <div>
        {explanation.keywords.map((keyword, index) => (
          <span
            key={index}
            className="bg-yellow-200 dark:bg-yellow-600 text-yellow-900 dark:text-white text-xs px-3 py-1 rounded-full"
          >
            {keyword}
          </span>
        ))}
      </div>

      {explanation.reason && (
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          <em>{explanation.reason}</em>
        </p>
      )}
    </div>
  );
};
