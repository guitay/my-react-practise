import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './css/search-detail.css'
import './css/base.css';
import SearchResultItem from './SearchResultItem.js'

class SearchResult extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div className="search-result">
				{
					this.props.items.map(function(item,i){
						return <SearchResultItem data={item} key={item.id}/>
					})
				}
			</div>
		);
	}
}
export default SearchResult;