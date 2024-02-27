import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from "react";

const AiwithText = () => {};

const AiWithImage = () => {
    const genAi = new GoogleGenerativeAI("AIzaSyD6vHdHfkcWN-NfLZSzCz2jZBBMsU4Xkcg");

    const [search, setSearch] = useState("");
    const [aiResponse, setAiResponse] = useState("");
    const [loading, setLoading] = useState(false);

    async function aiRun() {
        setLoading(true);
        setAiResponse("");
        const model = genAi.getGenerativeModel({ model: "gemini-pro" });
        const prompt = `random meals related to ${search} category with image and prices`;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        setAiResponse(text);
        setLoading(false);
    }

    // search
    const handleChangeSearch = (e) => {
        setSearch(e.target.value);
    };
    // submit button
    const handleClick = () => {
        aiRun();
    };

    return (
        <section>
            <div className="container mx-auto">
                <div className="flex items-center gap-3">
                    <input type="text" placeholder="Type here" onChange={(e) => handleChangeSearch(e)} className="w-full px-7 py-2.5 border border-gray-400 rounded-xl"/>
                    <button onClick={() => handleClick()} className="px-6 py-2.5 bg-slate-700 text-white rounded-xl">Generate</button>
                </div>
            </div>
        </section>
    );
};

export default AiWithImage;
