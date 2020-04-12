import React, { Component } from 'react'
import { Flex } from 'antd-mobile'
import PropTypes from 'prop-types'

export default class Hourshistory extends Component {
    static defaultProps = {
        v: {},
        addhistory: () => { }
    }
    // static propTypes = {
    //     item: PropTypes.object,
    //     addhistory: PropTypes.func
    // }
    render() {
        const { v, addhistory } = this.props
        return (
            <Flex onClick={() => addhistory(v)} key={v.id}>
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
        )
    }
}
