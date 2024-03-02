import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from "react";

const AiWithText = () => {
    const genAi = new GoogleGenerativeAI("AIzaSyD6vHdHfkcWN-NfLZSzCz2jZBBMsU4Xkcg");

    const [search, setSearch] = useState("");
    const [aiResponse, setAiResponse] = useState("");
    const [loading, setLoading] = useState(false);

    async function aiRun() {
        setLoading(true);
        setAiResponse("");
        const model = genAi.getGenerativeModel({ model: "gemini-pro" });
        const prompt = `${search}`;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        setAiResponse(text);
        setLoading(false);
    }

    const handlePromptSubmit = (e) => {
        e.preventDefault();

        const promptText = e.target.prompt.value;
        setSearch(promptText);
        aiRun();

        promptText("");
    };

    return (
        <section className="container">
            <div className="mx-auto relative">
                {/* Result */}
                <div className="w-full h-full space-y-5">
                    <h2 className="text-xl md:text-2xl font-semibold text-center pt-10">Chat With GenAI</h2>
                    <div className="bg-slate-700 p-3 rounded-xl">
                        <form onSubmit={handlePromptSubmit} className="flex items-center gap-3">
                            <input type="text" name="prompt" placeholder="Type here" className="w-full px-7 py-2.5 text-white bg-transparent border border-gray-400 rounded-xl focus:bg-transparent outline-none focus:outline-none" />
                            <button className="px-6 py-2.5 bg-slate-500 text-white rounded-xl">Generate</button>
                        </form>
                    </div>
                    <div className="p-5 border border-gray-300 rounded-xl space-y-5 overflow-y-scroll">
                        <p className="font-medium">AI Response Here</p>
                        {loading == true && aiResponse == "" ? <span className="loading loading-dots loading-lg"></span> : <p className="text-sm md:text-base">{aiResponse}</p>}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AiWithText;
