import React from 'react';
//引入路由路由
import { HashRouter, Switch, Route } from 'react-router-dom'
import 'antd-mobile/dist/antd-mobile.css'
import Main from './pages/main/Main';
// import Login from './pages/Login';
// import Reg from './pages/Reg';
//引入路由懒加载功能
import Loadable from 'react-loadable'
//引入store数据
import { Provider } from 'react-redux'
import store from './pages/redux/store'
//设置loading配置项 加载中
const loading = () => <div>加载中。。。。。。</div>
//创建懒加载对象
const Login = Loadable({
  //引入懒加载的组件
  loader: () => import(/* webpackChunkName:'login' */'./pages/Login'),
  loading: loading
})
const Reg = Loadable({
  loader: () => import(/* webpackChunkName:'reg' */'./pages/Reg'),
  loading: loading
})
const Forget = Loadable({
  loader: () => import(/* webpackChunkName:'reg' */'./pages/Forget'),
  loading: loading
})
const City = Loadable({
  loader: () => import(/* webpackChunkName:'reg' */'./pages/City'),
  loading: loading
})
const Search = Loadable({
  loader: () => import(/* webpackChunkName:'reg' */'./pages/Search'),
  loading: loading
})
const Map = Loadable({
  loader: () => import(/* webpackChunkName:'reg' */'./pages/Map'),
  loading: loading
})
function App() {
  return (
    <div className="App">
      <Provider store={store}>

        <HashRouter>
          <Switch>
            <Route path='/' exact component={Main}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/reg' component={Reg}></Route>
            <Route path='/forget' component={Forget}></Route>
            <Route path='/city' component={City}></Route>
            <Route path='/search' component={Search}></Route>
            <Route path='/map' component={Map}></Route>

          </Switch>
        </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
