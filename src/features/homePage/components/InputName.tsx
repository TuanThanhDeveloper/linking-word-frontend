// src/SelectMode.tsx
import { loginSuccess } from '@/App/App.action';
import { useState } from 'react';
import { useDispatch } from 'react-redux'


interface InputNameSubmitFormProps {
  onSubmit: (ishow: boolean) => void;
}

export const InputName = ({ onSubmit}: InputNameSubmitFormProps) => {
    const dispatch = useDispatch();
    const [userName, setUserName] = useState<string>('');
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        dispatch(loginSuccess({userName, loading:false}))
        onSubmit(true)
    };
    return (
        <div className="flex items-center">
            <span>Please input your name: </span>
            <form onSubmit={handleSubmit}>
                <div className='flex items-center text-xl justify-center'>
                    <input type="text" className="ml-4 text-black p-2.5 rounded bg-white w-96" id="name" onChange={(e) => setUserName(e.target.value)} />
                    <button className='button' type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

