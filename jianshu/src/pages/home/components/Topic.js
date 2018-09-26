import React,{Component} from 'react';
import {
    TopicWrapper,
    TopicItem,
    TopicMore
} from '../style';


class Topic extends Component{
    render(){
        return (
           <TopicWrapper>
               <TopicItem>
                   <img className="topic-img" src="//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" />
                   简书电影
               </TopicItem>
               <TopicItem>
                   <img className="topic-img" src="//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" />
                   简书电影
               </TopicItem>
               <TopicItem>
                   <img className="topic-img" src="//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" />
                   简书电影
               </TopicItem>
               <TopicItem>
                   <img className="topic-img" src="//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" />
                   简书电影
               </TopicItem>
               <TopicItem>
                   <img className="topic-img" src="//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" />
                   简书电影
               </TopicItem>
               <TopicItem>
                   <img className="topic-img" src="//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" />
                   简书电影
               </TopicItem>
               <TopicItem>
                   <img className="topic-img" src="//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" />
                   简书电影
               </TopicItem>
                <TopicMore>更多热门专题 ></TopicMore>
           </TopicWrapper>
        )
    }
}

export default Topic;