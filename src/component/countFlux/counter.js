import React,{Component} from 'react';
import CounterStore from './counterStore';
import * as Actions from './actions';

class Counter extends Component{
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            count: CounterStore.getCounterValues()[props.caption]
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    componentDidMount(){
        CounterStore.addChangeListener(this.onChange);
    }

    componentWillUnmount(){
        CounterStore.removeChangeListener(this.onChange);
    }

    onChange(){
        const newCount = CounterStore.getCounterValues()[this.props.caption];
        this.setState({
            count:newCount
        })
    }

    increment(){
        Actions.increment(this.props.caption);
    }
    decrement(){
        Actions.decrement(this.props.caption);
    }


    render(){
        const {caption} = this.props;
        return(
            <div>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <div>{caption} Count:{this.state.count}</div>
                <br/>
                <br/>
            </div>
        )
    }
}
export default Counter;

