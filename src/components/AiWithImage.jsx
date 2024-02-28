import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from "react";
import { getBase64 } from "../imagehelper/ImageHelper";

const AiWithImage = () => {
    const genAI = new GoogleGenerativeAI("AIzaSyD6vHdHfkcWN-NfLZSzCz2jZBBMsU4Xkcg");

    const [image, setImage] = useState("");
    const [imageInnerData, setImageInnerData] = useState("");
    const [imagePrompt, setImagePrompt] = useState("");
    const [aiImageResponse, setAiImageResponse] = useState("");
    const [loading, setLoading] = useState(false);

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

    async function aiImageRun() {
        setLoading(true);
        setAiImageResponse("");
        const model = genAI.getGenerativeModel({ model: "models/gemini-pro-vision" });
        const result = await model.generateContent([imagePrompt, imageInnerData]);
        const response = await result.response;
        const text = response.text();
        setAiImageResponse(text);
        setLoading(false);
    }

    const handleFileSubmit = (e) => {
        e.preventDefault();

        if (!e.target.files || e.target.files.length === 0) {
            console.error("No file selected");
            return;
        }

        const file = e.target.files[0];
        const imagePrompt = e.target.image_prompt.value;

        getBase64(file)
            .then((result) => {
                setImage(result);
                setImagePrompt(imagePrompt);
            })
            .catch((error) => {
                console.error("Error Message", error.message);
            });
        
        fileToGenerativePart(file)
            .then((image) => {
                setImageInnerData(image);
        })

        aiImageRun();
    };

    return (
        <section>
            <div className="container mx-auto">
                {/* Result */}
                <div className="w-full ">
                    <h2 className="text-xl md:text-2xl font-semibold text-center pt-10 py-5">Google Gemini AI Copy</h2>
                    <div className="p-5 border border-gray-300 rounded-xl space-y-5">
                        <p className="font-medium">AI Response Here</p>
                        {loading == true && aiImageResponse == "" ? <span className="loading loading-dots loading-lg"></span> : <p className="text-sm md:text-base">{aiImageResponse}</p>}
                    </div>
                </div>
                <form onSubmit={handleFileSubmit} className="flex items-center gap-3">
                    <input type="file" name="files" className="file-input file-input-bordered file-input-accent w-full max-w-xs" />
                    <input type="text" name="image_prompt" placeholder="Write Here" required className="px-4 py-2 border border-gray-300 rounded-xl" />
                    <button type="submit" className="px-6 py-2.5 bg-slate-700 text-white rounded-xl">
                        Generate
                    </button>
                </form>
            </div>
        </section>
    );
};

export default AiWithImage;
