import React,{Component} from 'react';
import Counter from './counter';
import Summary from './summary';
class CountPanel extends Component{
    render(){
        return(
            <div>
                <Counter caption='First'/>
                <Counter caption='Second'/>
                <Counter caption='Third'/>

                <br/>
                <br/>
                <Summary/>
            </div>
        )
    }
}
export default CountPanel;