
import { useState, useEffect } from 'react'


function App() {

  //useState是内建函数，count和setCount相当于getter和setter,
  //count代表函数组件中存在的state,初始值为0
  const [count, setCount] = useState(0)


  //effect指英语里的“side effects”(副作用)
  //通过api请求获取数据，处理订阅等。 app通过副作用与外界产生互动与交流
  //useEffect使我们能在函数组件中使用副作用
  //传入一个函数作为参数，默认情况下，每次页面渲染以后，useEffect都会执行
  //点击计数器按钮后count的state发生变化，渲染函数render会执行并重新渲染页面，这时候useEffect就会自动执行
  useEffect(() => {
    console.log('ssss')
    document.title = `点击${count}次`
  });

  const increment = () => {
    setCount(count + 1);
  }
  return (
    <button onClick={increment}>点击{count}次</button>
  );
}

export default App;
