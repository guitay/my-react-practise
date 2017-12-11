import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
//import './index.css';
import SearchDetail from './mycomponents/SearchDetail'

{
	var data = [{title:"aaa"},{title:"bbbb"},{title:"ccccc"}];
}

ReactDOM.render(
  <SearchDetail items={data}/>,
  document.getElementById('root')
);
