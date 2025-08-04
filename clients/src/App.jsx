import { useState } from "react";
// import "./App.css";
import { Navbar } from "./Components/Navbar";
import { NewsInputBox } from "./Components/NewsInputButton";
import { ExplanationPanel } from "./Components/ExplanationPanel";
import { ResultCard } from "./Components/ResultCard";
import { ScoreMeter } from "./Components/ScoreMeter";
import { Footer } from "./Components/Footer";
function App() {
  const [result, setResult] = useState(null);
  function handleAnalyze(newsText) {
    setTimeout(() => {
      setResult({
        verdict: "fake",
        confidence: 84,
        explanation:{
           keywords: ["shocking", "breaking", "death", "hoax"],
  reason: "The article uses highly emotional and misleading words commonly found in fake news."
        }
      });
    }, 1500);
  }
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900"
    >
    
      <Navbar />
      <NewsInputBox onAnalyze={handleAnalyze} />

      {result && (
        <>
          <ResultCard verdict={result.verdict} confidence={result.confidence} />
          <ScoreMeter confidence={result.confidence} />
          <ExplanationPanel explanation={result.explanation} />
        </>
      )}
      <Footer/>
    </div>
  );
}

export default App;
