import React ,{useState} from "react";

import { Navbar } from "./components/Navbar";
import { Routes } from "./components/Routes";
import { Footer } from "./components/Footer";

const App = () => {

    const[darkTheme, setDarkTheme] = useState(false);

    return(
        <div className={darkTheme ? 'dark' : ''}>
            <div className = 'bg-gray-500'>
                APP

            </div>
        </div>
    );
}

export default App;