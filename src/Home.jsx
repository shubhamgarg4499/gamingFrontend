import React, { useState, useEffect, useId } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Home = () => {
    const [games, setGames] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [page, setpage] = useState(1)
    const [search, setsearch] = useState("")
    // const [scroll, setscroll] = useState((3100 * page))
    const Uniqueid = useId()

    async function fetchApi() {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/getgames?page=${page}&category=${selectedCategory}`)
            setGames([...games, ...response.data])
        } catch (error) {
            console.log(error);
        }
    }
    async function changeCategory() {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/getgames?page=${page}&category=${selectedCategory}`)
            setGames([...response.data])
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchApi()
        console.log(page);
    }, [page])

    useEffect(() => {
        // Fetch games data from backend
        const fetchGames = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/getgames?page=${page}&category=${selectedCategory}`); // Replace with actual API endpoint

                setGames(response.data);

            } catch (error) {
                console.error("Error fetching games data:", error);
            }
        };
        async function fetchCategories() {
            axios
                .get(`${import.meta.env.VITE_BASE_URL}/getCategories`)
                .then(res => {
                    res.data.forEach(element => {
                        setCategories(prev => [...prev, element._id])

                    })
                })
                .catch(err => console.error(err));
        }
        fetchGames();
        fetchCategories()
        window.addEventListener("scroll", (e) => {
            // console.log(Math.floor(window.innerHeight + document.documentElement.scrollTop));
            // console.log(document.documentElement.scrollHeight);
            if (Math.floor(window.innerHeight + document.documentElement.scrollTop) == Math.floor(document.documentElement.scrollHeight) || Math.ceil(window.innerHeight + document.documentElement.scrollTop) == Math.ceil(document.documentElement.scrollHeight) || Math.round(window.innerHeight + document.documentElement.scrollTop) == Math.round(document.documentElement.scrollHeight)) {
                setpage(prev => prev + 1)
            }
        })
    }, []);

    useEffect(() => {
        changeCategory()
        console.log(selectedCategory);
    }, [selectedCategory])

    async function searchGamesByTitle() {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/getgames?page=${page}&title=${search}`)
            setGames([...response.data])
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">
            {/* <header className="mb-6">
        <h1 className="text-4xl font-bold text-center mb-4">Cloud Gaming</h1>
        <p className="text-center text-gray-400">
          Explore a variety of games and enjoy seamless gaming experiences.
        </p>
      </header> */}

            <div className="my-8 flex flex-col sm:flex-row gap-4 items-center">
                {/* Search Input with Button */}
                <div className="flex w-full sm:w-auto flex-grow gap-2 bg-gray-800 p-1 rounded-lg">
                    <input
                        type="text"
                        className="bg-gray-800 p-3 border border-none w-full flex-grow rounded-md outline-none text-white"
                        placeholder="Search Here By Name..."
                        value={search}
                        onChange={(e) => setsearch(e.target.value)}
                    />
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md" onClick={searchGamesByTitle}>
                        Search
                    </button>
                </div>

                {/* Category Filter */}
                <select
                    id="category"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="bg-gray-800 p-3 border border-gray-700 rounded-md text-white outline-none w-full sm:w-auto flex-grow"
                >
                    <option value="">All Category</option>
                    {categories.map((category) => (
                        <option value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {games.map((game) => (
                    <Link to={`/${game._id}`}>
                        <div

                            className="bg-gray-800 border border-gray-700 rounded-md overflow-hidden shadow-lg"
                        >
                            <img
                                src={game.thumb}
                                alt={game.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-bold mb-2">{game.title}</h2>
                                <p className="text-gray-400 mb-4">{game.category}</p>
                                <div
                                    // href={game.url}
                                    // target="_blank"
                                    // rel="noopener noreferrer"
                                    className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
                                >
                                    Play Now
                                </div>
                            </div>
                        </div></Link>
                ))}
            </div>

            {games.length === 0 && (
                <p className="text-center text-gray-400 mt-6">
                    No games found for the selected category.
                </p>
            )}
        </div>
    );
};

export default Home;
