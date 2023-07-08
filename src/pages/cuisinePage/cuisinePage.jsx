import { useNavigate, useParams } from "react-router-dom"
import { cuisineData, restaurantsData } from "../../data/data";

import './cuisinePage.css'

export const CuisinePage = () => {
  const { cuisineID } = useParams();

  const navigate = useNavigate()

  return (
    <div className="bg-pink-50 min-h-screen overflow-auto">

      {/* heading */}
      <p className="text-3xl font-semibold text-center my-4">Food Ordering App</p>

      {/* sub-head */}
      <p className="text-center text-2xl mt-6">Select Your Cuisine:</p>

      {/* categories */}
      <div className="text-center my-4">
        {cuisineData.map(({ id, name }) => <button key={id} className="rounded-md mx-3 py-2 px-4 text-lg bg-pink-600 text-white" onClick={() => navigate(`/cuisine/${id}`)}>{name}</button>)}
      </div>

      <hr className="border-pink-300 mb-5" />

      {/* cuisineName */}
      <p className="text-center text-2xl font-medium">{cuisineData.find(({ id }) => id === Number(cuisineID)).name}</p>

      {/* restaurants */}
      <div className="px-16 py-2 text-pink-800">
        {restaurantsData.filter(({ cuisine_id }) => Number(cuisineID) === cuisine_id).map((restaurant) => (
          <div className="p-3 mb-5" key={restaurant.id}>
            <p className="font-medium text-xl pb-4">{`Dishes by ${restaurant.name}`}</p>
            {/*Foods */}
            <div className="flex flex-wrap">
              {restaurant.menu.map((item, index) => (
                <div key={index} className="card mr-5 cursor-pointer" onClick={() => navigate(`/restaurant/${restaurant.id}`)}>
                  <div className="w-80 h-60 overflow-hidden flex items-center justify-center mb-2">
                    <img src={item.imgSrc} alt={item.name} className="h-full" />
                  </div>
                  <div className="p-1">
                    <p className="font-medium text-lg">{item.name}</p>
                    <p className="italic">{`₹${item.price} for one`}</p>
                    <p className="italic">{restaurant.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
