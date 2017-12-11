
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './css/search-detail.css';
import './css/base.css';

class ResultNumber extends Component{
	constructor(props){
		super(props);
	}
	
	
	render(){
		return (
		    <div className="result-number">
		        <span>为您找到相关结果为</span><span>{this.props.totalHits}</span><span>个</span>
		    </div>
		);
	}
}
export default ResultNumber;