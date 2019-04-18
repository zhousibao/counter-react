import React,{ Component } from 'react';
import Count from './count';
class CountPanel extends Component{
  constructor(props){
    super(props);
    this.onCountUpdate = this.onCountUpdate.bind(this);

    this.name = ['first','second','third'];
    this.value = [0,10,20];


    let initSum = this.value.reduce((a,b) => a+b, 0);

    this.state = {
        sum:initSum
    }
  }

  onCountUpdate(newValue,oldValue){
    let value = newValue - oldValue;
    this.setState({
      sum:this.state.sum + value
    })
  }

  render(){
    return(
      <div>
        <Count onUpdate={this.onCountUpdate} caption={this.name[0]}/>
        <Count onUpdate={this.onCountUpdate} caption={this.name[1]} initValue={this.value[1]}/>
        <Count onUpdate={this.onCountUpdate} caption={this.name[2]} initValue={this.value[2]}/>

        <br/>
        <br/>
        <br/>
        <div>Total Count : {this.state.sum}</div>
      </div>
    )
  }
}
export default CountPanel;