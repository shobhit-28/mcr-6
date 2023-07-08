import { useNavigate, useParams } from "react-router-dom"
import { DataContext } from "../../context/dataContext"
import { useContext, useState } from "react"
import { AiOutlineCloseCircle, AiOutlineStar } from 'react-icons/ai'
import { IoArrowBack } from 'react-icons/io5'
import './restaurantDetailPage.css'

export const RestaurantDetailPage = () => {
  const { restaurantID } = useParams()

  const { data, setData } = useContext(DataContext)

  const restaurantData = data.find(({ id }) => id === Number(restaurantID))

  const navigate = useNavigate()

  const [isModalOpen, setIsModalOpen] = useState()
  const [reviewData, setReviewData] = useState({
    rating: 1,
    comment: "",
    revName: "Anonymous",
    pp: "https://picsum.photos/150/150"
  })

  const submitHandler = () => {
    if (reviewData.comment.length !== 0) {
      setData(data.map((resData) => resData.id === Number(restaurantID)
        ?
        {
          ...resData,
          ratings: [...resData.ratings, reviewData],
          averageRating: Math.floor(resData.ratings.reduce((acc, curr) => acc + curr.rating, 0)/resData.ratings.length)
        }
        :
        resData
      ))
      setIsModalOpen(false)
      setReviewData({
        rating: 1,
        comment: "",
        revName: "Anonymous",
        pp: "https://picsum.photos/150/150"
      })
    } else {
      alert('Comment cannot be empty')
    }
  }

  const closeModalHandler = () => {
    setIsModalOpen(false)
    setReviewData({
      rating: 1,
      comment: "",
      revName: "Anonymous",
      pp: "https://picsum.photos/150/150"
    })
  }

  return (
    <div className="bg-pink-50 min-h-screen overflow-auto px-80">
      <button className="fixed left-3 top-3 text-3xl" onClick={() => navigate(-1)}><IoArrowBack /></button>
      <div className="flex justify-between mt-6 items-center">
        <div className="">
          <p className="text-4xl font-semibold ">{restaurantData.name}</p>
          <div className="flex">
            {restaurantData.menu.map(({ name }, index) => <p key={index} className="pr-1">{name}{index + 1 < restaurantData.menu.length && ', '}</p>)}
          </div>
          <p className="">{restaurantData.address}</p>
          <p className="">{`Avg Rating: ${restaurantData.averageRating}`}</p>
        </div>
        <div className="">
          <button className="rounded-md mx-3 py-2 px-4 text-lg bg-pink-600 text-white" onClick={() => setIsModalOpen(true)}>Add Review</button>
        </div>
      </div>
      <hr className="border-pink-300 my-5" />
      <p className="text-3xl font-semibold ">Reviews</p>
      {restaurantData.ratings.map((rating, index) => (
        <div className="mt-5" key={index}>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <div className="w-12 h-12 overflow-hidden flex rounded-full mr-3">
                <img src={rating.pp} alt="" className="w-auto" />
              </div>
              <p className="">{rating.revName}</p>
            </div>
            <p className="flex items-center bg-pink-800 text-white px-5 py-1 rounded">{rating.rating}<AiOutlineStar /></p>
          </div>
          <p className="">{rating.comment}</p>
          <hr className="border-pink-300 m-5" />
        </div>
      ))}
      {isModalOpen &&
        <div className="fixed h-screen w-screen top-0 right-0 z-10 flex justify-center items-center modal-container" onClick={() => closeModalHandler()}>
          <div className="opacity-100 bg-pink-800 relative p-5 text-pink-50 rounded-xl w-2/4" onClick={(event) => event.stopPropagation()}>
            <button className="absolute top-2 left-2 text-lg" onClick={() => closeModalHandler()}><AiOutlineCloseCircle /></button>
            <p className="text-center text-2xl font-medium mb-4">Add your review</p>
            <label htmlFor="comment" className="flex my-2 justify-between">
              <p className="">Name:</p>
              <input type="text" name="comment" id="comment" className="w-2/4 bg-pink-600" onChange={(event) => setReviewData({ ...reviewData, revName: event.target.value })} />
            </label>
            <label htmlFor="select" className="flex justify-between">
              <p className="">Rating:</p>
              <select name="select" id="select" className="bg-pink-600 rounded w-2/4" onChange={(event) => setReviewData({ ...reviewData, rating: event.target.value })}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </label>
            <label htmlFor="comment" className="flex my-2 justify-between">
              <p className="">Comment:</p>
              <input type="text" name="comment" id="comment" className="w-2/4 bg-pink-600" onChange={(event) => setReviewData({ ...reviewData, comment: event.target.value })} />
            </label>
            <button className="m-auto block border-2 p-2 mt-5" onClick={() => submitHandler()}>Submit</button>
          </div>
        </div>
      }
    </div>
  )
}
