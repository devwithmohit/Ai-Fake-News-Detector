# Fake News Detector 🧠

A modern web application that uses AI to detect fake news from headlines and articles.

---

## Project Overview

This React application analyzes news text using AI algorithms to determine whether it's likely real or fake. It provides a confidence score and detailed explanation of why the AI made its determination.

---

## Technology Stack

- **Frontend**: React 19 with Vite
- **Styling**: TailwindCSS 4.1
- **Build Tool**: Vite 7.0
- **Code Quality**: ESLint 9.30

---

## Features

- ✅ **User-friendly Interface**: Clean, responsive design
- ✅ **Dark Mode Support**: Toggle between light and dark themes
- ✅ **Real-time Analysis**: Instant feedback on news text
- ✅ **Detailed Explanations**: See why AI flagged content as real or fake
- ✅ **Confidence Scoring**: Visual meter showing AI confidence level
- ✅ **Accessibility**: Designed with accessibility in mind

---

## Components

The application is built with modular components:

- `Navbar`: Application header with theme toggle
- `NewsInputBox`: Text input area for news content
- `AnalyzeButton`: Initiates the analysis with loading states
- `ResultCard`: Displays the verdict (real/fake)
- `ScoreMeter`: Visual representation of confidence score
- `ExplanationPanel`: Shows detailed reasoning and flagged keywords
- `Footer`: Contains attribution and disclaimer

---

## Usage

1. Enter or paste news text in the input area.
2. Click the "Analyze" button.
3. View the results including:
   - Verdict (REAL or FAKE)
   - Confidence score with visual meter
   - Explanation with highlighted suspicious keywords

---


## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/fake-news-detector.git

# Navigate to the client directory
cd fake-news-detector/clients

# Install dependencies
npm install

# Start the development server
npm run dev


