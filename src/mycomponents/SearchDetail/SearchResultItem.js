import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './search-detail.css'

class SearchResultItem extends Component{
	constructor(props){
		super(props);
	}
	render(){
		{

		}
		return (
			<div className="search-result-item">
	            <div className="search-result-item-title">
	                <h3>{this.props.data.title}</h3>
	            </div>
	            <div className="short-describe ">
	                泛微OA绩效管理,多维度定义指标,实现企业KPI管理,绩效数据系统自动采集,尽可能的实现评估自动化,免费体验绩效管理!
	            </div>
	            <div className="net-address fl">www.e-office.cn</div>
	            <div className="upload-time ">2017-11</div>
	            <div className="belong-class">
	                <span>分类:</span>
	                <span>（文档类）咨询知识体系>进场准备>项目交接</span>
	            </div>
	            <div className="others-info">
	                <div className="upload-user fl">
	                    <span>上传者:</span>
	                    <span>admin</span>
	                </div>
	                <span className="line fl">丨</span>
	                <div className="department fl">
	                    <span>部门:</span>
	                    <span>软件研发部</span>
	                </div>
	                <span className="line fl" >丨</span>
	                <div className="read-number fl">
	                    <span>阅读次数:</span>
	                    <span>5</span>
	                </div>
	                <span className="line fl" >丨</span>
	                <div className="comment-number fl">
	                    <span>评论次数:</span>
	                    <span>0</span>
	                </div>
	            </div>
	        </div>
				
		);
	}
}
export default SearchResultItem;