import React from 'react'
//这是一个类组件
class App extends React.Component {

    //计数状态
    state = {
        count: 0
    }

    //title初始化
    componentDidMount() {
        document.title = `点击${this.state.count}次`
    }
    //title更新
    componentDidUpdate() {
        document.title = `点击${this.state.count}次`
    }

    //控制器
    increment = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        return (

            <button onClick={this.increment}>点击{this.state.count}次</button>
        )
    }
}
export default App;