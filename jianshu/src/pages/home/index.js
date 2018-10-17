import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from './store/';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';

class Home extends PureComponent{
    showChange(){
        if(this.props.showScroll){
            return (
                <BackTop onClick={this.GoTop}>回到顶部</BackTop>
            )
        }
        
    }

    GoTop(){
        document.documentElement.scrollTop =0;
    }

    render(){
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img alt="" className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4463/b6b848a9c9c822040c3be80c2dd1d72a3825fba8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                
                {
                    this.showChange()
                }
            
            </HomeWrapper>
        )
    }
    componentDidMount(){
        this.props.changeHomeData();
        this.bindEvents();
    }

    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollShow)
    }
}

const mymap=(state)=>{
    console.log(state.getIn(['home','showScroll']));
    return {
        showScroll:state.getIn(['home','showScroll'])
    }
}

const mapDispath=(dispatch)=>{
    return {
        changeHomeData(){
            dispatch(actionCreators.changeHomeData());
        },
        changeScrollShow(){
            if(document.documentElement.scrollTop>100){
                dispatch(actionCreators.changeShowScroll(true));
            }else{
                dispatch(actionCreators.changeShowScroll(false));
            }
        }
    }
    
}

export default connect(mymap,mapDispath)(Home);
