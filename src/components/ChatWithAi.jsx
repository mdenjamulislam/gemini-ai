import { GoogleGenerativeAI } from "@google/generative-ai";
import React, { useState } from "react";

const ChatWithAi = () => {
    const genAI = new GoogleGenerativeAI("AIzaSyCeITqLa-ncNRWFTrwAMt5WoTZIcejSh1M");

    const [userText, setUserText] = useState("");
    const [aiResponse, setAiResponse] = useState("");

    async function chatRun() {
        // For text-only input, use the gemini-pro model
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const chat = model.startChat({
            history: [
                {
                    role: "user",
                    parts: "Hello, I have 2 dogs in my house.",
                },
                {
                    role: "model",
                    parts: "Great to meet you. What would you like to know?",
                },
            ],
            generationConfig: {
                maxOutputTokens: 100,
            },
        });

        const msg = userText;

        const result = await chat.sendMessage(msg);
        const response = await result.response;
        const text = response.text();
        setAiResponse(text);
    }

    // chatRun();

    const handleChatSubmit = (e) => {
        e.preventDefault();
        const promptText = e.target.prompt.value;
        setUserText(promptText);
        chatRun();
        setUserText("");
    };

    return (
        <section className="container">
            <div className="mx-auto relative">
                {/* HTML for avobe code */}
                <div className="w-full h-full space-y-5">
                    <h2 className="text-xl md:text-2xl font-semibold text-center pt-10">Chat With GenAI</h2>
                    <div className="bg-slate-700 p-3 rounded-xl">
                        <form onSubmit={handleChatSubmit} className="flex items-center gap-3">
                            <input type="text" name="prompt" placeholder="Type here" className="w-full px-7 py-2.5 text-white bg-transparent border border-gray-400 rounded-xl focus:bg-transparent outline-none focus:outline-none" />
                            <button type="submit" className="px-6 py-2.5 bg-slate-500 text-white rounded-xl">Generate</button>
                        </form>
                    </div>
                    <div className="p-5 border border-gray-300 rounded-xl space-y-5 overflow-y-scroll">
                        <p className="font-medium">AI Response Here</p>
                        <p className="text-sm md:text-base">{aiResponse}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChatWithAi;
