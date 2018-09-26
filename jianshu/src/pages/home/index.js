import React,{Component} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from './store/';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';

class Home extends Component{
    render(){
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4463/b6b848a9c9c822040c3be80c2dd1d72a3825fba8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
            </HomeWrapper>
        )
    }
    componentDidMount(){
        this.props.changeHomeData();
    }
}


const mapDispath=(dispatch)=>{
    return {
        changeHomeData(){
            dispatch(actionCreators.changeHomeData());
        }
    }
    
}

export default connect(null,mapDispath)(Home);