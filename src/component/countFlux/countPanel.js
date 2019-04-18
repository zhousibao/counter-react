import React,{Component} from 'react';
import Count from './counter';
import Summary from './summary';
class CountPanel extends Component{
    
    render(){
        return(
            <div>
                <Count caption='First'/>
                <Count caption='Second'/>
                <Count caption='Third'/>


                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Summary/>
            </div>

        )
    }



}
export default CountPanel;