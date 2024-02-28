import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AiWithText from "./components/AiWithText";
import AiWithImage from "./components/AiWithImage";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <AiWithText/>
            {/* <AiWithImage/> */}
        </>
    );
}

export default App;
