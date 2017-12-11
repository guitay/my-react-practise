import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './search-detail.css'

class SearchBox extends Component{
	constructor(props){
		super(props);
	}
	findByWord=()=>{
		const data = {
	      keyword: ReactDOM.findDOMNode(this.refs.searchInput).value,
	    }
	   /* if (this.props.select) {
	      data.field = this.state.selectValue
	    }
	    if (this.props.onSearch) this.props.onSearch(data)*/
	}
	
	render(){
		return (
			<div className="searchBox">
				<input type="text" id="keyword" name="keyword" ref="searchInput"/>
				<input type="button" value="智库搜索" id="searchBtn" onclick={this.findByWord}/>
				<span></span>
		    </div>
		);
	}
}
export default SearchBox;