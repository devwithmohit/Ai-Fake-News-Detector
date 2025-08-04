import { useState } from "react";
import { AnalyzeButton } from "./AnalyzeButton";

export const NewsInputBox = ({onAnalyze}) => {
    const [newsText, setNewsText]= useState('')
    const [error , setError] = useState(false)
const [isLoading, setIsLoading] = useState(false);
    const handleAnalyze = ()=>{
        if (newsText.trim() === ''){
            setError(True)
            return
        }
        setError(false)
        setIsLoading(true)
        onAnalyze(newsText)

        setTimeout(()=>{
            setIsLoading(false)
        },2000)
    }
  return (
    <div className="w-full max-w-3xl text-xl font-bold mx-auto mt-10 px-4">
      <label>Enter News Headline or Articles:</label>

      {/* Textarea */}
      <textarea
        rows={6}
        value={newsText}
        onChange={(e) => setNewsText(e.target.value)}
        placeholder="e.g., Government approves new education policy..."
        className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
      />
      {error && (
        <p className="text-sm text-red-500 mt-1">Please Enter Some Text..</p>
      )}

      <AnalyzeButton onClick={handleAnalyze} className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-all"
      isLoading={isLoading} 
       disabled={newsText.trim() === ''}
      > Analyze</AnalyzeButton>
    </div>
  );
};

