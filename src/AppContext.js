
//方法2
import { useContext } from 'react'
//方法1
import { userContext } from './index'

function App() {
  //方法2
  const value = useContext(userContext)

  return (
    <div>
      {/* 1.旧方式 //react定义数据获取的过程叫做Consumer 消费 */}
      <userContext.Consumer>
        {value => <div>hello, {value}</div>}
      </userContext.Consumer>
      {/* 2.也可以通过引入useContext 直接使用，极大的减少了模板代码，降低了代码层级，消灭了多个Consumer嵌套的可能性 */}
      <div>hello, {value}</div>
    </div>

  );
}

export default App;
