import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AiWithImage from "./components/AiWithImage";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h2 className="text-2xl font-semibold text-center">Today I build a AI using google ai key.</h2>
            <AiWithImage />
        </>
    );
}

export default App;
