import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './css/search-detail.css';
import './css/base.css';
import SearchBox from './SearchBox.js';
import SearchResult from './SearchResult.js';
import ShortCut from './ShortCut.js';
import ResultNumber from './ResultNumber.js';
import Logo from './Logo.js';

class SearchDetail extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
		<div className="w">
			<ShortCut/>
			<Logo/>
			<SearchBox/>
			<ResultNumber totalHits={this.props.items.length}/>
			<SearchResult items={this.props.items}/>
		</div>
		);
		
	}
}
export default SearchDetail;