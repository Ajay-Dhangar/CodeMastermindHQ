import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import './style.css';

const Editor: React.FC = () => {
  const [mode, setMode] = useState<'css' | 'javascript' | 'markdown' | 'htmlmixed'>('css');
  const [code, setCode] = useState<string>(`/* Your initial CSS code here */`);

  const changeMode = () => {
    const modes = ['css', 'javascript', 'markdown', 'htmlmixed'];
    const currentModeIndex = modes.indexOf(mode);
    const nextMode = modes[(currentModeIndex + 1) % modes.length];
    setMode(nextMode as 'css' | 'javascript' | 'markdown' | 'htmlmixed');
  };

  useEffect(() => {
    const editor = document.querySelector('.editor-code') as HTMLTextAreaElement;
    if (!editor) return;

    const handleResize = () => {
      const codeContainer = document.querySelector('.editor-code-container') as HTMLElement;
      const codeWidth = codeContainer.offsetWidth;
      const codeHeight = codeContainer.offsetHeight;
      editor.style.width = `${codeWidth}px`;
      editor.style.height = `${codeHeight}px`;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [mode]);

  return (
    <Layout wrapperClassName='main-code-container'>
      <div className="editor-code-container">
        <input className="editor-sig" value="// Ajay Dhangar 💜" />
        <div className="editor-glow-container">
          <div className="editor-augs" data-augmented-ui></div>
        </div>
        <section className="editor-augs editor-bg" data-augmented-ui>
          <button className="editor-dots" onClick={changeMode} title={`(click to change) Current Mode: ${mode}`} />
          <input className="editor-title" value="CodeMastermind" />
          <div className="editor-code highcontrast-dark">
            <textarea className="editor-code-editor" value={code} onChange={(e) => setCode(e.target.value)} />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Editor;
