import React, { Component } from 'react'
import { connet, changeNumAc, deletGoodAC } from './stor'
import { connect } from 'react-redux'

class child extends Component {
    changenum = (index, n) => {
        this.props.dispatch(changeNumAc(index, n))
    }
    deletgood = (index) => {
        this.props.dispatch(deletGoodAC(index))
    }
    render() {
        const { list } = this.props
        return (
            <div>
                sjdkasda
               <table>
                    <thead>
                        <tr>
                            <th>商品名</th>
                            <th>单价</th>
                            <th>数量</th>
                            <th>小计</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((item, index) => {

                            return (<tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td><button onClick={() => { this.changenum(index, -1) }}>-</button>{item.num}<button onClick={() => { this.changenum(index, 1) }}>+</button></td>
                                <td>{item.price * item.num}</td>
                                <td><button onClick={() => { this.deletgood(index) }}>删除</button></td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        list: state.goodlist
    }
}
export default connect(mapStateToProps)(child)