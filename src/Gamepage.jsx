import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const GamePage = () => {
    const { id } = useParams();
    const [game, setGame] = useState(null);
    const [relatedGames, setRelatedGames] = useState([]);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const iframeContainerRef = useRef(null);

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_BASE_URL}/getgameById/`, { params: { id } })
            .then((res) => {
                setGame(res.data);
                fetchRelatedGames(res.data.Genres[0]);
            })
            .catch((err) => console.error(err));
    }, [id]);

    const fetchRelatedGames = (category) => {
        axios
            .get(`${import.meta.env.VITE_BASE_URL}/getgames?category=${category}`)
            .then((res) => setRelatedGames(res.data))
            .catch((err) => console.error(err));
    };

    const toggleFullscreen = () => {
        if (!isFullscreen) {
            const elem = iframeContainerRef.current;
            if (elem.requestFullscreen) elem.requestFullscreen();
            else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
            else if (elem.msRequestFullscreen) elem.msRequestFullscreen();
        } else {
            if (document.exitFullscreen) document.exitFullscreen();
            else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
            else if (document.msExitFullscreen) document.msExitFullscreen();
        }
    };

    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };

        document.addEventListener("fullscreenchange", handleFullscreenChange);
        return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
    }, []);

    return (
        game ? (
            <div className="min-h-screen bg-gray-900 text-white p-6 flex">
                {/* Game Section */}
                <div className="flex-1 pr-4">
                    {/* Game Window */}
                    <div
                        ref={iframeContainerRef}
                        className={`relative bg-black rounded-lg overflow-hidden ${isFullscreen ? "h-screen" : "h-[600px]"} mb-6`}
                    >
                        <button
                            onClick={toggleFullscreen}
                            className="absolute top-4 right-4 bg-blue-600 px-4 py-2 rounded-full text-sm hover:bg-blue-700 z-10"
                        >
                            {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                        </button>
                        <iframe
                            src={`https://html5.gamedistribution.com/0ab5e8c3851e4d1e9515e3571ace4709/`}
                            className="w-full h-full"
                            frameBorder="0"
                            allowFullScreen
                            sandbox="allow-scripts allow-same-origin allow-popups"
                        />
                    </div>

                    {/* Game Details */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h1 className="text-2xl font-bold mb-2">{game.Title}</h1>
                        <p className="text-gray-300 mb-4">{game.Description}</p>
                        <h2 className="text-lg font-semibold mb-2">{game.Instructions}</h2>
                        {/* <ul className="list-disc list-inside text-gray-400">
                            {game.Tips?.map((tip, index) => (
                                <li key={index}>{tip}</li>
                            ))}
                        </ul> */}
                    </div>
                </div>

                {/* Related Games Section */}
                <aside className="w-80 bg-gray-800 p-4 rounded-lg shadow-lg">
                    <h2 className="text-xl font-bold mb-4">Related Games</h2>
                    <div className="space-y-4">
                        {relatedGames.map((relatedGame) => (
                            <Link
                                key={relatedGame._id}
                                to={`/${relatedGame._id}`}
                                className="block bg-gray-700 hover:bg-gray-600 rounded-lg overflow-hidden shadow-md transition-all"
                            >
                                <img
                                    src={relatedGame.Assets[0]}
                                    alt={relatedGame.Title}
                                    className="w-full h-40 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-bold truncate">{relatedGame.Title}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </aside>
            </div>
        ) : (
            <p className="text-center text-gray-400 mt-6">Loading game...</p>
        )
    );
};

export default GamePage;
