import React, { Component } from 'react'
import Child from './child'
import { connect } from 'react-redux'
import { changeNameAC } from './stor'
class fath extends Component {
    change = () => {

        this.props.dispatch(changeNameAC('王二'))
    }
    render() {
        console.log(this.props);

        return (
            <div>
                我叫：{this.props.name}
                <button onClick={this.change}>点我不一样</button>
                <Child></Child>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        name: state.name
    }
}
export default connect(mapStateToProps)(fath)