import React from "react";

import heroImg from "../assets/hero.png";

const Home = () => {
    return (
        <section className="py-10 md:py-20">
            <div className="container">
                <h1 className="uppercase text-center text-xl md:text-2xl lg:text-5xl font-bold text-white">
                    Life is <span className="pt-1 pb-2 px-2 border-2 border-pink-500">Easier</span> with AI
                </h1>

                <div className="grid grid-cols-3 items-center">
                    <div>
                        <div className="w-28 h-28 border border-pink-500 flex items-center justify-center rounded-xl">
                            <p>Chat With AI</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center mt-6 md:mt-10">
                        <img src={heroImg} alt="" className="w-32 md:w-72 lg:w-96" />
                    </div>
                    <div className="flex justify-end border-b border-pink-500">
                        <div className="w-28 h-28 border border-pink-500 flex items-center justify-center rounded-xl -mb-14 bg-slate-600">
                            <p>Chat With AI</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
