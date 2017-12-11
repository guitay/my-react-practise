
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './css/search-detail.css';
import './css/base.css';

class ShortCut extends Component{
	constructor(props){
		super(props);
	}
	
	render(){
		return (
			<div className="shortcut">
		        <ul>
		            <li>
		                <span>欢迎你</span>
		                <span className="name"></span>
		            </li>
		            <li className="line">丨</li>
		            <li><a href="">上传文档</a></li>
		            <li className="line">丨</li>
		            <li><a href="">天维问答</a></li>
		            <li className="line">丨</li>
		            <li><a href="">待办事项</a></li>
		            <li className="line">丨</li>
		            <li><a href="">退出</a></li>
		        </ul>
		    </div>
		);
	}
}
export default ShortCut;