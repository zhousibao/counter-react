import React,{ Component } from 'react';
class Count extends Component{
  constructor(props){
    super(props);
    this.incrementButoon = this.incrementButoon.bind(this);
    this.decrementButton = this.decrementButton.bind(this);

    this.state = {
      count:props.initValue
    };
  }

  incrementButoon(){
    this.updateCount(true);
  }

  decrementButton(){
    this.updateCount(false);
  }

  updateCount(is){
    let oldValue = this.state.count;
    let newValue = is ? oldValue + 1 : oldValue - 1;
    this.setState({
      count:newValue
    });
    this.props.onUpdate(newValue,oldValue);
  }

  render(){
    const {caption} = this.props;
    return(
      <div>
        <button onClick={this.incrementButoon}> + </button>
        <button  onClick={this.decrementButton}> - </button>

        <div>{caption} Count: {this.state.count}</div>

        <br/>
        <br/>
      </div>
    )
  }
}

/*默认情况下的props.initValue的值*/
Count.defaultProps = {
  initValue:0
}

export default Count;