'use client';
import { ShineBorder } from "./shine-border";
import { MagicCardDemo } from "./shop";


export function ShineBorderDemo() {
    return (
        <div className="p-5">
            <ShineBorder
                className="relative w-full h-96 rounded-full mt-2 bg-slate-800 text-white flex items-center justify-center overflow-hidden"
                color={["#cc0000", "#1a0000", "#FFBE7B"]}
                borderWidth={15}
                borderRadius={200}
            >
                {/* Video inside ShineBorder */}
                <video
                    className="w-full h-full object-cover rounded-full pointer-events-none"
                    autoPlay
                    loop
                    muted
                    controls
                >
                    <source src={"curtain_reveal.mp4"} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </ShineBorder>

            <div className="flex flex-col mt-10">
            <div className="flex mt-10 w-full justify-center">
                <div>
                    <MagicCardDemo text="Pavilion 1" />
                </div>
                <div className="ml-48">
                    <MagicCardDemo text="Pavilion 2" />
                </div>
               
            </div>

            <div className="flex mt-14 ml-56">
                <span className="w-5 h-5 bg-red-500 rounded-full animate-emit delay-150"></span>
                <span className="w-5 h-5 ml-20 bg-red-500 rounded-full animate-emit delay-150"></span>
                <span className="w-5 h-5 ml-20 bg-red-500 rounded-full animate-emit delay-150"></span>
                <span className="w-5 h-5 ml-20 bg-red-500 rounded-full animate-emit delay-150"></span>
                <span className="w-5 h-5 ml-20 bg-red-500 rounded-full animate-emit delay-150"></span>
                <span className="w-5 h-5 ml-20 bg-red-500 rounded-full animate-emit delay-150"></span>
                <span className="w-5 h-5 ml-20 bg-red-500 rounded-full animate-emit delay-150"></span>
                <span className="w-5 h-5 ml-20 bg-red-500 rounded-full animate-emit delay-150"></span>
                <div style={{ width: 500, height: 100 }}></div>
            </div>
            <div className="flex  ml-56">
                <span className="w-5 h-5 bg-red-500 rounded-full animate-emit delay-150"></span>
                <span className="w-5 h-5 ml-20 bg-red-500 rounded-full animate-emit delay-150"></span>
                <span className="w-5 h-5 ml-20 bg-red-500 rounded-full animate-emit delay-150"></span>
                <span className="w-5 h-5 ml-20 bg-red-500 rounded-full animate-emit delay-150"></span>
                <span className="w-5 h-5 ml-20 bg-red-500 rounded-full animate-emit delay-150"></span>
                <span className="w-5 h-5 ml-20 bg-red-500 rounded-full animate-emit delay-150"></span>
                <span className="w-5 h-5 ml-20 bg-red-500 rounded-full animate-emit delay-150"></span>
                <span className="w-5 h-5 ml-20 bg-red-500 rounded-full animate-emit delay-150"></span>
                <div style={{ width: 'full', height: 100 }}></div>

            </div>
            <div className="flex  ml-56">
                <span className="w-5 h-5 bg-red-500 rounded-full animate-emit delay-150"></span>
                <span className="w-5 h-5 ml-20 bg-red-500 rounded-full animate-emit delay-150"></span>
                <span className="w-5 h-5 ml-20 bg-red-500 rounded-full animate-emit delay-150"></span>
                <span className="w-5 h-5 ml-20 bg-red-500 rounded-full animate-emit delay-150"></span>
                <span className="w-5 h-5 ml-20 bg-red-500 rounded-full animate-emit delay-150"></span>
                <span className="w-5 h-5 ml-20 bg-red-500 rounded-full animate-emit delay-150"></span>
                <span className="w-5 h-5 ml-20 bg-red-500 rounded-full animate-emit delay-150"></span>
                <span className="w-5 h-5 ml-20 bg-red-500 rounded-full animate-emit delay-150"></span>
                <div style={{ width: 500, height: 100 }}></div>

            </div>
            <div className="flex  ml-56">
                <span className="w-5 h-5 bg-red-500 rounded-full animate-emit delay-150"></span>
                <span className="w-5 h-5 ml-20 bg-red-500 rounded-full animate-emit delay-150"></span>
                <span className="w-5 h-5 ml-20 bg-red-500 rounded-full animate-emit delay-150"></span>
                <span className="w-5 h-5 ml-20 bg-red-500 rounded-full animate-emit delay-150"></span>
                <span className="w-5 h-5 ml-20 bg-red-500 rounded-full animate-emit delay-150"></span>
                <span className="w-5 h-5 ml-20 bg-red-500 rounded-full animate-emit delay-150"></span>
                <span className="w-5 h-5 ml-20 bg-red-500 rounded-full animate-emit delay-150"></span>
                <span className="w-5 h-5 ml-20 bg-red-500 rounded-full animate-emit delay-150"></span>
                <div style={{ width: 500, height: 100 }}></div>

            </div>


</div>
            <style jsx global>{`
                @keyframes emit {
                    0% {
                        transform: scale(1);
                        box-shadow: 0 0 0 0 rgba(204, 0, 0, 0.5);
                    }
                    50% {
                        transform: scale(1.5);
                        box-shadow: 0 0 20px 10px rgba(204, 0, 0, 0);
                    }
                    100% {
                        transform: scale(1);
                        box-shadow: 0 0 0 0 rgba(204, 0, 0, 0);
                    }
                }
                .animate-emit {
                    animation: emit 2s infinite ease-in-out;
                }
            `}</style>
        </div>
    );
}
