// src/HomePage.tsx

import { useState } from "react";
import {SelectMode} from "../components/SelectMode"
import {InputName} from "../components/InputName"

export const HomePage = () => {
    const [show, setShow] = useState(false);
    const handleSubmit = (isShow: boolean) => {
        setShow(isShow)
  };

    return (
        <div className="App max-w-1280 text-center p-8 mx-auto">
            <header>
                <h1 className="mb-10">Linking Word</h1>
            </header>
            <main>
            {!show &&<InputName onSubmit={handleSubmit}/>}
            {show &&<SelectMode/>}
            </main>
        </div>
    );
};

