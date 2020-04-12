import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';
import Home from './Home'
import Wechat from './Wechat'
import My from '../My'
import History from './History'

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 0,
            tablist: [
                {
                    id: 0,
                    title: '首页',
                    icon: 'home'

                },
                {
                    id: 1,
                    title: '微聊',
                    icon: 'wechat'
                },
                {
                    id: 2,
                    title: '推荐',
                    icon: 'history'

                },
                {
                    id: 3,
                    title: '我的',
                    icon: 'my'

                },
            ]
        };
    }

    renderContent(id) {
        switch (id) {
            case 0:
                return <Home />
            case 1:
                return <Wechat />
            case 2:
                return <History />
            case 3:
                return <My />

            default:
                break;
        }
    }

    render() {
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#00BC5B"
                    barTintColor="white"
                >
                    {
                        this.state.tablist.map((v) => {
                            return (
                                <TabBar.Item
                                    title={v.title}
                                    key={v.id}
                                    icon={<div style={{
                                        width: '22px',
                                        height: '22px',
                                        background: `url(${require('../../assets/img/' + v.icon + '.png')}) center center /  cover no-repeat`
                                    }}
                                    />
                                    }
                                    selectedIcon={<div style={{
                                        width: '22px',
                                        height: '22px',
                                        background: `url(${require('../../assets/img/' + v.icon + '_s.png')}) center center /  cover no-repeat`
                                    }}
                                    />
                                    }
                                    selected={this.state.selectedTab === v.id}

                                    onPress={() => {
                                        this.setState({
                                            selectedTab: v.id,
                                        });
                                    }}
                                    data-seed="logId"
                                >
                                    {this.renderContent(v.id)}
                                </TabBar.Item>

                            )
                        })
                    }
                </TabBar>
            </div>
        );
    }
}

