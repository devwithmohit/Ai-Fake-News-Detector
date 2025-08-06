export const AnalyzeButton = ({ onClick, isLoading, disabled }) => {
  return (
    <div>
      <button
        onClick={onClick}
        // Button ko disable karne ka logic.
        disabled={disabled || isLoading}
        className={`mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-all 
        
        ${disabled || isLoading ? "opacity-50 cursor-not-allowed" : ""}
      `}
      >
        {isLoading ? (
          <span className="animate-pulse">Analyzing...</span>
        ) : (
          "Analyze"
        )}
      </button>
    </div>
  );
};
