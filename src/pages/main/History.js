import React, { Component } from 'react'
import { connect } from 'react-redux'
import Hourshistory from '../component/Hourshistory';

class History extends Component {

    render() {
        console.log(this.props.history);
        const { history } = this.props
        return (
            <div>
                {
                    history.map((v) => {
                        return <Hourshistory v={v} key={v.id}></Hourshistory>
                    })
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        history: state.history
    }
}
export default connect(mapStateToProps)(History)