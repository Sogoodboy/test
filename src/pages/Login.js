import React, { Component } from 'react'
import { Flex, WhiteSpace, WingBlank, List, InputItem, Button } from 'antd-mobile';
import { Link } from 'react-router-dom'
import { loginApi } from '../apis/api'
import '../untils/un'
export default class Login extends Component {
    state = {
        phone: '',
        pass: ''
    }
    changephone = (val) => {
        this.setState({
            phone: val
        })
    }
    changepass = (val) => {
        this.setState({
            pass: val
        })
    }
    loginto = () => {
        const { phone, pass } = this.state;
        const params = {
            password: pass, phoneNum: phone
        };
        loginApi(params).then((res) => {
            const { token, data } = res.data
            if (token) {
                console.log(res);
                localStorage.setItem('token', token)
                localStorage.setItem('phone', data.phoneNum)
                this.props.history.push('/')
            }
        }
        )
            .catch((err) => (console.log(err)
            ))
    }
    render() {
        const { phone, pass } = this.state
        return (
            <div style={{ backgroundColor: ' #fff', height: '100%' }}>
                <WhiteSpace size='xl' ></WhiteSpace>
                <WhiteSpace size='xl' ></WhiteSpace>
                <Flex justify="center">
                    <img alt='' style={{ width: 100, height: 100 }} src={require('../assets/img/logo.png')}></img>
                </Flex>
                <WhiteSpace size='xl' ></WhiteSpace>
                <WhiteSpace size='xl' ></WhiteSpace>
                <WingBlank>
                    <WingBlank>
                        <List style={{ borderBottom: '1px solid #F9F9F9' }}>

                            <InputItem
                                placeholder="请输入手机号" val={phone} onChange={this.changephone}
                            >
                                {/* <div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} /> */}
                                <div><i className='iconfont icon-user'></i></div>
                            </InputItem>

                        </List>
                        <List style={{ borderBottom: '1px solid #F9F9F9' }}>
                            <InputItem
                                placeholder="请输入密码" val={pass} type='password' onChange={this.changepass}
                            >
                                {/* <div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} /> */}
                                <div><i className='iconfont icon-3701mima'></i></div>
                            </InputItem></List>
                        <WhiteSpace size='xl' ></WhiteSpace>
                        <Button onClick={this.loginto} style={{ backgroundColor: "#00BC5B", color: '#fff' }}>登陆</Button>
                        <WhiteSpace size='lg' ></WhiteSpace>

                        <Flex justify='between'>
                            <Link to='/reg' style={{ color: '#33CBA3' }}>手机快速注册</Link>
                            <Link to='/forget' style={{ color: '#33CBA3' }}>忘记密码</Link>
                        </Flex>
                    </WingBlank>
                </WingBlank>
            </div>
        )
    }
}
