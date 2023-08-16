import { useDispatch, useSelector } from "react-redux"
import { RootState } from "./redux/store"
import { decrement, icrementByNumber, increment } from "./redux/features/counter/counterSlice";


function App() {
  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch=useDispatch();
  return (

    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl mb-2">Counter App</h1>
      <div className="flex items-center space-x-4"
     >
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          onClick={()=>dispatch(decrement())}>
          -Dec
        </button>
        <span className="text-xl">{count}</span>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          onClick={()=>dispatch(increment())}
        >
          +Inc
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          onClick={()=>dispatch(icrementByNumber(5))}
        >
          +Inc By Num
        </button>
      </div>
    </div>
  )
}

export default App
