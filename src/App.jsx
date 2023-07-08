import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/homePage/HomePage"
import { CuisinePage } from "./pages/cuisinePage/cuisinePage"
import { RestaurantDetailPage } from "./pages/restaurantDetailPage/restaurantDetailPage"

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cuisine/:cuisineID" element={<CuisinePage />} />
        <Route path="/restaurant" element={<RestaurantDetailPage />} />
      </Routes>
    </div>
  )
}

export default App
