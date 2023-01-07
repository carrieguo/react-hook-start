
import { useState, useEffect } from 'react'
import axios from 'axios'

// 使用useEffect来实现数据请求中的data fetch
// httpClientLibrary AXIOS
function App() {

    const [results, setResults] = useState([])


    //在effect函数内，对外部api函数调用，获得数据的过程，是一个副作用
    //在每次渲染后useEffect中的effect函数都会被执行，而每次收到api回调后，都会更新一次results，所以程序会启动无限次的call
    //传入第二个参数 [], effect仅在组件加载时执行一次
    //1. .then方式请求数据
    //   useEffect(()=>{
    //     axios.get("http://hn.algolia.com/api/v1/search?query=redux")
    //     .then(response=>{
    //         setResults(response.data.hits)
    //     })
    //   }, []);

    //2. async await 方式请求数据
    //使用async await 关键词，函数会返回一个promise, useEffect中必须返回一个函数或什么都不返回，所以这种写法报错了
    // useEffect(async ()=>{
    //     const res = await axios.get("http://hn.algolia.com/api/v1/search?query=redux")
    //     setResults(res.data.hits)
    // }, [])
    useEffect(() => {
        getResultsAsync()

    }, [])
    const getResultsAsync = async () => {
        const res = await axios.get("http://hn.algolia.com/api/v1/search?query=redux")
        setResults(res.data.hits)
    }


    return (
        <ul>
            {results.map(result => (
                <li key={result.objectID}>
                    <a href={result.url}>{result.title}</a>
                </li>
            ))}
        </ul>
    );
}

export default App;
