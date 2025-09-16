import React, { useState } from "react";
import axios from "axios";

function App() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async () => {
    const response = await axios.post("http://localhost:5000/generate", { prompt });
    setResult(response.data.result);
  };

  return (
    <div>
      <h1>Text Generation App</h1>
      <textarea
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt here"
      />
      <button onClick={handleSubmit}>Generate</button>
      {result && (
        <div>
          <h2>Generated Text:</h2>
          <p>{result}</p>
        </div>
      )}
    </div>  
  );
}

export default App;
