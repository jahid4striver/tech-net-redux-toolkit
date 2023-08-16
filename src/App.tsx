import { decrement, icrementByNumber, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";


function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch=useAppDispatch();
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
