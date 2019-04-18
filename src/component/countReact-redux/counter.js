import React from 'react';
import * as Actions from './actions';
import {connect} from 'react-redux';

function Counter({caption,increment,decrement,value}) {
    return (
        <div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <div>{caption} Count:{value}</div>
            <br/>
            <br/>
        </div>
    )
}

function mapStateToProps(state,ownProps){
    return{
        value:state[ownProps.caption]
    }
}

function mapDispatchToProps(dispatch,ownProps){
    return{
        increment:() => {
            dispatch(Actions.increment(ownProps.caption))
        },
        decrement:() => {
            dispatch(Actions.decrement(ownProps.caption))
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Counter);

