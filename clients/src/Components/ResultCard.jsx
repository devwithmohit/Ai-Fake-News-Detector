import React from "react";

export const ResultCard = ({ verdict, confidence }) => {
  const isFake = verdict.toLowerCase() === "fake";
  return (
    <div
      className={`w-full max-w-2xl mx-auto mt-6 p-6 rounded-xl shadow-lg border-l-8 
        ${
          isFake ? "bg-red-100 border-red-600" : "bg-green-100 border-green-600"
        }
        dark:${
          isFake ? "bg-red-900 border-red-400" : "bg-green-900 border-green-400"
        }
      `}
    >
      <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
        Verdict:
        <span className={isFake ? "text-red-600" : "text-green-600"}>
          {verdict.toUpperCase()}
        </span>
      </h2>

      <p>
        Confidence Score: <strong>{confidence}</strong>
      </p>
    </div>
  );
};

export default ResultCard;
