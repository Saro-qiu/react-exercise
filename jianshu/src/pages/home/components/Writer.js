import React,{PureComponent} from 'react';
import {
    WriteWrapper,
    WriteTitle,
    WriteItem,
    WriteItemDes,
    WriteItemBtn
}from '../style';
class Writer extends PureComponent{
    render(){
        return (
            <WriteWrapper>
                <WriteTitle>
                    推荐作者
                    <span><i className="iconfont">&#xe851;</i>换一批</span>
                </WriteTitle>
                <WriteItem>
                    <img alt="" src="//upload.jianshu.io/users/upload_avatars/13668047/1bd3b146-a7cf-4d88-b04d-dcef4c45e9dc?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" />
                    <WriteItemDes>
                        <h3>好书浩评</h3>
                        <p>写了52.5k字 · 152喜欢</p>
                    </WriteItemDes>
                    <WriteItemBtn><i className="iconfont">&#xe601;</i>关注</WriteItemBtn>
                </WriteItem>
                <WriteItem>
                    <img alt="" src="//upload.jianshu.io/users/upload_avatars/13668047/1bd3b146-a7cf-4d88-b04d-dcef4c45e9dc?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" />
                    <WriteItemDes>
                        <h3>好书浩评</h3>
                        <p>写了52.5k字 · 152喜欢</p>
                    </WriteItemDes>
                    <WriteItemBtn><i className="iconfont">&#xe601;</i>关注</WriteItemBtn>
                </WriteItem>
            </WriteWrapper>
        )
    }
}

export default Writer;
