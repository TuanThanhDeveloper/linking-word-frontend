// src/SelectMode.tsx
import { LoginModel } from '@/App/App.action';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router';


export const SelectMode = () => {
    const navigate = useNavigate();
    const user = useSelector((state: {app: LoginModel}) => state.app.userName);
    const navigateToPVE = () => {
        navigate('/pve');
    };

    return (
        <div className="App max-w-1280 text-center p-8 mx-auto">
            <span className="mb-10">Welcome {user}. Please select play mode.</span>
            <button className='button' onClick={navigateToPVE}>PVE</button>
            <button className='button'>PVP</button>
        </div>
    );
};

