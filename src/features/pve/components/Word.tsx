// src/Word.tsx
import React, { useState } from 'react';
import './Word.css'

interface WordSubmitFormProps {
  onSubmit: (word: string) => void;
  previousWord: string
  disable: boolean
}

export const WordSubmitForm = ({ onSubmit, previousWord, disable }: WordSubmitFormProps) => {
  const [word, setWord] = useState<string>('');
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(word);
    setWord('')
  };


  return (
    <form onSubmit={handleSubmit}>
      <div className='flex items-center text-xl justify-center'>
        <span className='text-lime-500'>{previousWord}</span>
        <input disabled={disable} type="text" className="ml-4 text-black p-2.5 rounded bg-white" id="name" value={word} onChange={(e) => setWord(e.target.value)} />
        <button className='button' type="submit">Submit</button>
      </div>
    </form>
  );
};
