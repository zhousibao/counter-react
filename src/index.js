import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


//  react、flux、redux三种形式
// import CountPanel from './component/count/countPanel';
// import CountPanel from './component/countFlux/countPanel';
// import CountPanel from './component/countRedux/countPanel';

// ReactDOM.render(<CountPanel/>,document.getElementById('root'));


// react-redux形式
import {Provider} from 'react-redux';
import store from './component/countReact-redux/store.js';
import CountPanel from './component/countReact-redux/countPanel';
ReactDOM.render(<Provider store={store}><CountPanel/></Provider>,document.getElementById('root'));
