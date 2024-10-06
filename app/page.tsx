"use client";

import { useState } from 'react';

const Home = () => {
  const [htmlCode, setHtmlCode] = useState<string>('');
  const [previewCode, setPreviewCode] = useState<string>('');

  // Function to paste predefined HTML into the textarea
  const pasteHTML = () => {
    const sampleHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML Previewer Test</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f0f0f0;
      color: #333;
    }
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      background-color: #fff;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    h1 {
      color: #007BFF;
    }
    p {
      line-height: 1.6;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Welcome to HTML Previewer</h1>
    <p>This is a sample HTML document to test the HTML Previewer application.</p>
  </div>
</body>
</html>`;
    setHtmlCode(sampleHTML);
  };

  // Function to generate the preview when the button is clicked
  const generatePreview = () => {
    setPreviewCode(htmlCode);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-3xl font-bold text-center mb-5">HTML Previewer</h1>

      <div className="flex justify-center mb-5 space-x-4">
        {/* Paste HTML Button */}
        <button
          onClick={pasteHTML}
          className="bg-black text-white px-4 py-2 rounded hover:bg-black"
        >
          Paste HTML
        </button>

        {/* Generate Preview Button */}
        <button
          onClick={generatePreview}
          className="bg-black text-white px-4 py-2 rounded hover:bg-black"
        >
          Generate Preview
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Input TextArea */}
        <div>
          <h2 className="text-xl mb-2">Enter your HTML code</h2>
          <textarea
            value={htmlCode}
            onChange={(e) => setHtmlCode(e.target.value)}
            className="w-full h-96 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Paste or enter HTML code here..."
          />
        </div>

        {/* Preview Area */}
        <div>
          <h2 className="text-xl mb-2">Preview</h2>
          <div
            className="border border-gray-300 rounded-md p-4 h-96 overflow-auto bg-white "
            dangerouslySetInnerHTML={{ __html: previewCode }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
