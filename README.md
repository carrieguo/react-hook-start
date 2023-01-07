# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### react中存在两种组件类型
1. 类组件 class component
>组件状态(state)管理

>生命周期


2. 函数组件 function component
> 轻量化

> props的注入

在过去的版本中组件状态state只能被存储管理在类组件中，所以比较繁重的业务都会被放到类组件中处理，比如跟踪某一个数据的state变化，或者管理组件的生命周期，如调用componentWillMount(),componentWillUnmount()诸如此类的api.

对比类组件，函数组件则轻量化很多多数通过props的注入来分解类组件，从而使类组件的组件树看起来更清晰，代码更具可读性。而组件与组件之间的逻辑关系也会更加明确。
## React hooks

> `16.7+ 新特性`

> `只有函数` 生命周期已经被改写
> 不使用类组件的情况下使用state和其他react功能

> `不再需要redux`

react hooks 代表了 react 组件构成中的一次重大变革，而且将会改变以往的react代码习惯。
1. 我们不再需要类组件，react hook把类组件中的一切功能都赋予了函数组件
2. 不会再有this
3. 不会再有binging
4. 不会再有生命周期的api
5. 不会再有redux 管理数据状态

### 代码示例
> useState 管理组件状态

>useEffect 进行异步操作

>useContext 实现数据注入

> useReducer 取代redux



