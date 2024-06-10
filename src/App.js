import './App.css';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';

import Navbar from './Component/Navbar';
import MainBanner from './Page/MainBanner';
import SignIn from './Page/SignIn';

function App() {
    
    const cookies = new Cookies();

    const [mainPath, setMainPath] = useState(window.location.pathname)
    const mainBg = (mainPath === "/") ? "bg-[#041836]" : "bg-[#01377F]"
    useEffect(() => {
        if(cookies.get('isLogin') !== true){
            cookies.set('isLogin', false);
        }
    }, [])

    return (
        <div className={`min-h-screen ${mainBg}`}>
            <div className='p-4 absolute w-full'>
                <Navbar />
            </div>
            
            <Routes>
                <Route path="/" element={<MainBanner setMainPath={setMainPath} />} />
                <Route path="/sign-in" element={<SignIn setMainPath={setMainPath} />} />
            </Routes>
        </div>
    );
}

export default App;
