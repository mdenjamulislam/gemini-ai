import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getBase64 } from "../imagehelper/ImageHelper";

const AiwithImage = () => {
    const genAI = new GoogleGenerativeAI("AIzaSyDtiBA7Z3cIgjqzSktQUm0zGj3uQBAWuso");

    const [image, setImage] = useState("");
    const [imageInineData, setImageInlineData] = useState("");
    const [aiResponse, setResponse] = useState("");
    const [loading, setLoading] = useState(false);

    /**
     * Generative AI Call to fetch image insights
     */
    async function aiImageRun() {
        setLoading(true);
        setResponse("");
        const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
        const result = await model.generateContent(["What's in this photo?", imageInineData]);
        const response = await result.response;
        const text = response.text();
        setResponse(text);
        setLoading(false);
    }

    const handleClick = () => {
        aiImageRun();
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        // getting base64 from file to render in DOM
        getBase64(file)
            .then((result) => {
                setImage(result);
            })
            .catch((e) => console.log(e));

        // generating content model for Gemini Google AI
        fileToGenerativePart(file).then((image) => {
            setImageInlineData(image);
        });
    };

    // Converts a File object to a GoogleGenerativeAI.Part object.
    async function fileToGenerativePart(file) {
        const base64EncodedDataPromise = new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result.split(",")[1]);
            reader.readAsDataURL(file);
        });

        return {
            inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
        };
    }

    return (
        <div className="container">
            <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <input type="file" onChange={(e) => handleImageChange(e)} className="border border-gray-500" />
                    <button onClick={() => handleClick()} className="px-4 py-2 border border-gray-600 rounded-xl bg-slate-700 hover:drop-shadow-md">
                        Search
                    </button>
                </div>
                <img src={image} className="w-24 h-auto rounded-lg" />
            </div>

            {loading == true && aiResponse == "" ? (
                <span className="loading loading-ring loading-lg"></span>
            ) : (
                <div className="p-8">
                    <p>{aiResponse}</p>
                </div>
            )}
        </div>
    );
};

export default AiwithImage;
