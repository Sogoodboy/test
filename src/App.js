import React from 'react';
//引入路由路由
import { HashRouter, Switch, Route } from 'react-router-dom'
import 'antd-mobile/dist/antd-mobile.css'
import Main from './pages/main/Main';
// import Login from './pages/Login';
// import Reg from './pages/Reg';
//引入路由懒加载功能
import Loadable from 'react-loadable'
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
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path='/' exact component={Main}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/reg' component={Reg}></Route>
          <Route path='/forget' component={Forget}></Route>

        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
