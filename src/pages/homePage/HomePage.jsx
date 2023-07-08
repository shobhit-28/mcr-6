import { useNavigate } from "react-router-dom"
import { cuisineData } from "../../data/data"

export const HomePage = () => {
    const navigate = useNavigate()

    return (
        <div className="bg-pink-50 h-screen pt-28">
            {/* Heading  */}
            <p className="text-center font-bold text-8xl mb-16">Food Ordering App</p>

            {/* sub-head */}
            <p className="text-center font-bold text-5xl my-16">Select Your Cuisine:</p>

            {/* categories */}
            <div className="text-center my-8">
                {cuisineData.map(({ id, name }) => <button key={id} className="rounded-md mx-3 py-2 px-4 text-xl bg-pink-600 text-white" onClick={() => navigate(`/cuisine/${id}`)}>{name}</button>)}
            </div>

        </div>
    )
}
