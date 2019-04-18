import React,{Component} from 'react';
import * as Actions from './actions';
import store from './store';

class Counter extends Component{
    constructor(props){
        super(props);

        this.onChange = this.onChange.bind(this);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.getOwnState = this.getOwnState.bind(this);

        this.state = this.getOwnState();

    }

    getOwnState(){
        return {
            value: store.getState()[this.props.caption]
        }
    }

    componentDidMount(){
        store.subscribe(this.onChange);
    }
    componentWillUnmount(){
        store.unsubscribe(this.onChange);
    }
    onChange(){
        this.setState(this.getOwnState())
    }





    increment(){
        store.dispatch(Actions.increment(this.props.caption));

    }
    decrement(){
        store.dispatch(Actions.decrement(this.props.caption));
    }


    render(){
        const value = this.state.value;
        const {caption} = this.props;
        return(
            <div>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <div>{caption} Count:{value}</div>
                <br/>
                <br/>
            </div>
        )
    }
}
export default Counter;

