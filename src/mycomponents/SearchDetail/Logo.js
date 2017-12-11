
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './css/search-detail.css';
import './css/base.css';

class Logo extends Component{
	constructor(props){
		super(props);
	}
	
	render(){
		return (
			<div className="logo">
	        <a href=""><img src="images/u96.png" height="80" alt=""/></a>
		    </div>
		);
	}
}
export default Logo;