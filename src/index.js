import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import AppClass from './AppClass';
import AppRequest from './AppRequest';
import AppContext from './AppContext';
import AppReducer from './AppReducer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

//react context 允许组件共享某一个数据，而不需要通过props注入的方式，这样可以有效避免出现props drilling
export const userContext = React.createContext();
const userName = "hahaha"

root.render(
  <React.StrictMode>
    class计数器
    <AppClass />
    <br></br>
    function计数器
    <App />
    <br></br>
    异步请求
    <AppRequest />
    <br></br>
    react context 组件共享某一个数据
    <userContext.Provider value={userName}>
      <AppContext />
    </userContext.Provider>
    <br></br>
    react reducer全局状态管理 useReducer
    <AppReducer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
