
import { useReducer } from 'react'
//全局状态管理 useReducer, 替代 redux flex mobilex

//初始值
const initalState = {
  count: 0
}

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1
      }
    case "decrement":
      return {
        count: state.count - 1
      }
    case "reset":
    default:
      return initalState
  }

}

function App() {
  const [state, dispatch] = useReducer(reducer, initalState);


  return (
    <div>

      <div>{state.count}</div>
      <button onClick={() => dispatch({ type: "increment" })}>增加</button>
      <button onClick={() => dispatch({ type: "decrement" })}>减少</button>
      <button onClick={() => dispatch({ type: "reset" })}>归零</button>
    </div>
  );
}

export default App;
