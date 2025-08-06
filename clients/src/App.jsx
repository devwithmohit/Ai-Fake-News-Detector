import { useState } from "react";
import { Navbar } from "./Components/Navbar";
import { NewsInputBox } from "./Components/NewsInputButton";
import { ExplanationPanel } from "./Components/ExplanationPanel";
import { ResultCard } from "./Components/ResultCard";
import { ScoreMeter } from "./Components/ScoreMeter";
import { AnalyzeButton } from "./Components/AnalyzeButton";
import { Footer } from "./Components/Footer";
import { SearchButton } from "./Components/SearchButton";

function App() {
  const [result, setResult] = useState(null);
  const [newsText, setNewsText] = useState("");
  const [isLoading, setLoading] = useState(false);

  // Real handleAnalyze function to call Flask API
  const handleAnalyze = async () => {
    if (!newsText.trim()) return;
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ news: newsText }),
      });

      const data = await res.json();
      setResult(data);
      setLoading(false);
    } catch (error) {
      console.error("🔥 Error in analyzing:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <Navbar />
        <NewsInputBox value={newsText} onChange={setNewsText} />
        <AnalyzeButton
          onClick={handleAnalyze}
          isLoading={isLoading}
          disabled={newsText.trim().length == 0}
        />

        {result && (
          <>
            <ResultCard
              verdict={result.verdict}
              confidence={result.confidence}
            />
            <ScoreMeter confidence={result.confidence} />
            <ExplanationPanel explanation={result.explanation} />
            <SearchButton query={newsText} />
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
