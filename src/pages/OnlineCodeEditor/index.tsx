import React, { useState } from 'react';
import './style.css';
import Layout from '@theme/Layout';

const OnlineCodeEditor = () => {
    const [htmlCode, setHtmlCode] = useState<string>('');
    const [cssCode, setCssCode] = useState<string>('');
    const [jsCode, setJsCode] = useState<string>('');
    const [output, setOutput] = useState<string>('');
 
  const runCode = () => {
    // Combine HTML, CSS, and JS code
    const combinedCode = `
      <html>
        <style>${cssCode}</style>
        <body>${htmlCode}</body>
        <script>${jsCode}</script>
      </html>
    `;

    // Set the combined code as the output
    setOutput(combinedCode);
  };

    return (
       <Layout>
        <div className="online-code-editor">
        <h2 className="code-editor-h2">Online Code Editor</h2>
        <div className="code-editor">
          <div className="editor-pane">
            <h3>HTML</h3>
            <textarea
              value={htmlCode}
              onChange={(e) => setHtmlCode(e.target.value)}
            />
          </div>
          <div className="editor-pane">
            <h3>CSS</h3>
            <textarea
              value={cssCode}
              onChange={(e) => setCssCode(e.target.value)}
            />
          </div>
          <div className="editor-pane">
            <h3>JS</h3>
            <textarea
              value={jsCode}
              onChange={(e) => setJsCode(e.target.value)}
            />
          </div>
        </div>
        <button className="code-editor-btn" onClick={runCode}>Run Code</button>
        <div className="output">
          <h3>Output</h3>
          <div className='html-output' dangerouslySetInnerHTML={{ __html: output }}></div>
        </div>
       </div>
      </Layout>
    );
};


export default OnlineCodeEditor;
