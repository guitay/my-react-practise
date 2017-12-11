import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './search-detail.css'
import SearchBox from './SearchBox.js';
import SearchResult from './SearchResult.js';

class SearchDetail extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
		<div className="w">
			<SearchBox/>
			<SearchResult items={this.props.items}/>
		</div>
		);
		
	}
}
export default SearchDetail;