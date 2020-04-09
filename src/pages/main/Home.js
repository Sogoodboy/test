import React, { Component } from 'react'
import { Flex, Carousel, Grid, WhiteSpace } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
import { youlike } from '../../apis/api'

class Home extends Component {
    state = {
        city: '定位中.....',
        data: ['carousel_1', 'carousel_2', 'carousel_3'],
        imgHeight: 176,
        datas: [
            {
                icon: 'icon_1',
                text: `新房`
            },
            {
                icon: 'icon_2',
                text: `二手房`
            },
            {
                icon: 'icon_3',
                text: `租房`
            },
            {
                icon: 'icon_4',
                text: `商铺写字楼`
            },
            {
                icon: 'icon_5',
                text: `卖房`
            },
            {
                icon: 'icon_6',
                text: `海外房产`
            },
            {
                icon: 'icon_7',
                text: `小区房价`
            },
            {
                icon: 'icon_6',
                text: `问答`
            },

        ].map((v) => ({
            icon: require(`../../assets/img/${v.icon}.png`),
            text: v.text
        })),
        datas2: [
            {
                icon: 'icon_1',
                text: `新房`
            },
            {
                icon: 'icon_2',
                text: `二手房`
            },
            {
                icon: 'icon_3',
                text: `租房`
            },
            {
                icon: 'icon_4',
                text: `商铺写字楼`
            },


        ].map((v) => ({
            icon: require(`../../assets/img/${v.icon}.png`),
            text: v.text
        })),
        youlike: []
    }
    gotosomewhere = (e) => {
        this.props.history.push(e)
    }
    componentDidMount() {
        window.AMap.plugin('AMap.CitySearch', () => {
            var citySearch = new window.AMap.CitySearch()
            citySearch.getLocalCity((status, result) => {
                if (status === 'complete' && result.info === 'OK') {
                    // 查询成功，result即为当前所在城市信息
                    const city = result.city
                    this.setState({
                        city
                    })
                }
            })
        })
        youlike().then((req) => {
            this.setState({
                youlike: req.data.data
            })

        })
    }

    render() {
        const { city, youlike } = this.state
        return (
            <div>
                <Flex style={{ height: 50, backgroundColor: '#29C775' }}>

                    <div style={{ width: 80, color: '#fff', paddingLeft: 5 }} onClick={() => this.gotosomewhere('/city')}>
                        {city} ▼
                    </div>
                    <Flex onClick={() => this.gotosomewhere('/search')} align='center' style={{ flex: 1, backgroundColor: '#fff', height: 40, borderRadius: 20, paddingLeft: 10 }} >
                        <img src={require('../../assets/img/search.png')} style={{ width: 20, height: 20, marginRight: 5 }} alt='' />
                        <span style={{ color: '#ccc' }}>找房子就上源码app</span>
                    </Flex>
                    <div onClick={() => this.gotosomewhere('/map')} style={{ width: 40 }}><img style={{ backgroundColor: '#green', width: 40, height: 40 }} src={require('../../assets/img/map.png')} alt='' /></div>
                </Flex>
                {/* 轮播图 */}
                <Carousel
                    autoplay={false}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
                    {this.state.data.map(val => (
                        <a
                            key={val}
                            href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={require(`../../assets/img/${val}.jpg`)}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}

                            />
                        </a>
                    ))}
                </Carousel>
                {/* 宫格 */}
                <Grid data={this.state.datas} isCarousel onClick={_el => console.log(_el)} />
                <WhiteSpace size='xl' style={{ backgroundColor: '#F5F5F9' }}></WhiteSpace>
                <div>
                    <Flex align='end'>
                        <div style={{ fontSize: 18, fontWeight: 700, color: '#03BD5D', marginRight: 10 }}>房产全百科</div>
                        <div style={{ fontSize: 14, color: '#9D9D9D' }}>专业的买房攻略</div>
                    </Flex>
                    <Grid data={this.state.datas2} onClick={_el => console.log(_el)} />
                </div>
                <WhiteSpace size='xl' style={{ backgroundColor: '#F5F5F9' }}></WhiteSpace>
                <div>
                    <div style={{ padding: 10 }}>猜你喜欢</div>
                    {youlike.map((v) => {
                        return <Flex key={v.id}>
                            <img style={{ width: 100, height: 100, marginRight: 10 }} src={v.pic} alt=''></img>

                            <div style={{ flex: 1 }}>
                                <Flex style={{ flex: 1 }} justify='between'>
                                    <span style={{ fontSize: 20, fontWeight: 700 }}>{v.name}</span>
                                    <span>{v.price}/平</span>
                                </Flex>
                                <div style={{ marginTop: 10, marginBottom: 10 }}>{v.address}</div>
                                <div>4室2厅 200平</div>
                            </div>

                        </Flex>
                    })}
                </div>
            </div>
        )
    }
}
export default withRouter(Home)