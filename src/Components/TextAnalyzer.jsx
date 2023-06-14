import React, { useState } from 'react';

const TextAnalyzer = () => {
  const [textContent, setTextContent] = useState('');
  const [wordsCount, setWordsCount] = useState(0);
  const [lettersCount, setLettersCount] = useState(0);
  const [paragraphsCount, setParagraphsCount] = useState(0);

  // Analyze the text area content
  const analyzeText = (e) => {

    // get the words
    const words = textContent
      .split('\n')
      .filter(word => word.trim() !== 0);

    // get the letters
    const letters = textContent.replaceAll();

    // get the paragraphs
    const paragraphs = textContent
      .split('\n')
      .filter(paragraph => paragraph.trim() !== 0);

    setWordsCount(words.length);
    setLettersCount(letters.length);
    setParagraphsCount(paragraphs.length);
  };

  return (
    <>
      <h1 className='fs-2 bg-dark bg-gradient text-light text-center rounded-3 shadow-sm'>
        Text Analyzer
      </h1>
      <div className='bg-body-tertiary p-2 vstack justify-content-center align-items-center gap-3 rounded-3'>
        <textarea
          className='input-group'
          name="text"
          id="text"
          cols="50"
          rows="5"
          placeholder='Enter some text to analyze.... '
          onChange={(e) => { setTextContent(e.target.value); }} value={textContent}></textarea>
        <button className='btn btn-outline-primary' onClick={analyzeText}>Analyze</button>
        <div className='align-self-start'>
          <h4 className='fs-6'>Words: {wordsCount}</h4>
          <h4 className='fs-6'>Letters: {lettersCount}</h4>
          <h4 className='fs-6'>Paragraphs: {paragraphsCount}</h4>
        </div>
      </div>

    </>
  );
};

export default TextAnalyzer;