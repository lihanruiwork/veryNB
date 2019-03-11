函数式编程
* 不能修改参数
* 不能调用系统IO API
* 不能调用Math.random() Date.now()
```javascript
import { createStore } from 'redux'
let { getState, dispatch, subscribe} = createStore(reducer, initialState)
store.subscribe(render)
const Counter = ({val, increment, decrement})=>{
  <div>
    <h1>{val}</h1>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
  </div>
}
const render = ()=>{
  ReactDOM.render(
    <Counter value={store.getState()} 
             increment={() => store.dispatch({type: 'increment'})}
             decrement={() => store.dispatch({type: 'decrement'})}
    ></Counter>,
    document.getElementById('root')
  )
}
reducer: (state, action)=>{
    switch(action.type){
      case 'increment': return state + 1;
      case 'decrement': return state - 1;
      default: return state;
    }
}
```
视图与状态一一对应
* 用户发出action
* store自动调用reducer, 返回新的state
* state改变，store调用监听函数（subscribe）
* listen通过store.getState()获取当前状态，触发重新渲染
