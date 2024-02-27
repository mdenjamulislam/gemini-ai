import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from "react";

const AiWithImage = () => {
    const genAI = new GoogleGenerativeAI("AIzaSyD6vHdHfkcWN-NfLZSzCz2jZBBMsU4Xkcg");

    const [imageSearch, setImageSearch] = useState("");
    const [aiImageResponse, setAiImageResponse] = useState('');
    const [loading, setLoading] = useState(false);

    async function fileGoogleGenerativePart(file) {
        const base64EncodedDataPromise = new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result.split(",")[1]);
            reader.readAsDataURL(file);
        });
        return {
            inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
        };
    }

    async function run() {
        setLoading(true);
        setAiImageResponse("");
        const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

        const prompt = "What's different between these pictures?";

        const fileInputEl = document.querySelector("input[type=file]");
        const imageParts = await Promise.all([...fileInputEl.files].map(fileToGenerativePart));

        const result = await model.generateContent([prompt, ...imageParts]);
        const response = await result.response;
        const text = response.text();
        console.log(text);
    }

    run();

    const handleFileSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <section>
            <div className="container">
                <form onSubmit={handleFileSubmit} className="flex items-center gap-3">
                    <input type="file" name="file" />
                    <button type="submit" className="px-6 py-2.5 bg-slate-700 text-white rounded-xl">Generate</button>
                </form>
            </div>
        </section>
    );
};

export default AiWithImage;
