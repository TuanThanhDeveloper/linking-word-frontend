// src/PVEMode.tsx
import { useEffect, useState } from 'react';
import {WordSubmitForm} from '../components/Word';
import { useSelector } from 'react-redux';
import { LoginModel } from '@/App/App.action';

export const PVEMode = () => {
    const user = useSelector((state: {app: LoginModel}) => state.app.userName);
    
    const [message, setMessage] = useState('');
    const [previousWord, setItems] = useState('');
    const [point, setPoint] = useState(0);
    const [disable, setStatus] = useState(false);

    const fetchData = async (url: string, params?: Record<string, string>) => {
        try {
            const response = await fetch(`${url}?${new URLSearchParams(params)}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        } catch (error) {
            console.error('Error fetching data:', error);
            return { word: '' };
        }
    };

    const handleWordSubmit = async (word: string) => {
        try {
            const data = await fetchData('http://127.0.0.1:8000/word', {
                word: `${previousWord.split(' ')[1]} ${word}`,
                version: '1',
            });

            if (data.ok) {
                if (data.word === null) {
                    setStatus(true)
                    setMessage('You win!. Continue play.');
                } else {
                    setItems(data.word);
                    setPoint(point + 1)
                }
            } else {
                setStatus(true)
                setMessage('You lose. Play again.');
            }
        } catch (error) {
            console.error('Error submitting word:', error);
            setMessage('An error occurred. Please try again.');
        }
    };

    const fetchRandomWord = async () => {
        try {
            const data = await fetchData('http://127.0.0.1:8000/random_word', { version: '1' });
            setItems(data.word);
        } catch (error) {
            console.error('Error fetching random word:', error);
            setMessage('An error occurred. Please try again.');
        }
    };

    useEffect(() => {
        fetchRandomWord();
    }, []);

    const tryAgain = () => {
        setPoint(0)
        setMessage('')
        setItems('')
        setStatus(false)
        fetchRandomWord()
    }

    return (
        <div className="App max-w-1280 text-center p-8 mx-auto">
            <header>
                <h1>Nối Từ</h1>
            </header>
            <main>
                <div className="mg-b-20">
                    <span>hello {user}</span>
                    <span className="point"> Point: {point}</span>
                    <div className='text-xl my-4'>
                        <a href={"https://vi.wiktionary.org/wiki/" + previousWord} target="_blank" >{previousWord}</a>
                    </div>
                    <WordSubmitForm onSubmit={handleWordSubmit} previousWord={previousWord.split(' ')[1]} disable={disable} />
                </div>
                <div>
                    {message && <span onClick={tryAgain} className="cursor-pointer">
                        {message}
                    </span>}
                </div>
            </main>
        </div>
    );
};

