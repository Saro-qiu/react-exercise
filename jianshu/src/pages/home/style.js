import styled from 'styled-components';
export const HomeWrapper = styled.div`
    width:960px;
    margin:0 auto;
    overflow:hidden;
`

export const HomeLeft = styled.div`
    width:635px;
    margin-left:15px;
    padding-top:30px;
    float:left;
    .banner-img{
        width:625px;
        height:270px;
    }
`

export const HomeRight = styled.div`
    width:280px;
    float:right;
`

export const TopicWrapper = styled.div`
    padding:20px 0px 10px 0;
    overflow:hidden;
    margin-left:-18px;
    border-bottom:1px solid #f0f0f0;
`

export const TopicItem = styled.div`
    float:left;
    background:#f7f7f7;
    line-height:32px;
    font-size:14px;
    border:1px solid #dcdcdc;
    color:#000;
    border-radius:4px;
    overflow:hidden;
    padding-right:10px;
    margin-left:18px;
    margin-bottom:18px;
    .topic-img{
        width:32px;
        height:32px;
        float:left;
        margin-right:10px;
    }
`

export const TopicMore = styled.div`
    float:left;
    line-height:32px;
    font-size:14px;
    margin-left:18px;
    margin-bottom:18px;
    color:#787878;
`

export const ListItem= styled.div`
    overflow:hidden;
    padding:20px 0px;
    border-bottom:1px solid #dcdcdc;
    .pic{
        display:blcok;
        width:125px;
        height:100px;
        float:right;
    }
`

export const LoadMore = styled.div`
    width:100%;
    height:40px;
    line-height:40px;
    background:#a5a5a5;
    text-align:center;
    color:#fff;
    border-radius:10px;
    margin-top:20px;
`

export const ListInfo = styled.div`
    width:500px;
    float:left;
    h3{
        font-size: 18px;
        font-weight: 700;
        line-height: 1.5;
        margin: -7px 0 4px;
    }
    p{
        margin: 0 0 8px;
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }
`
export const RecommendWrapper = styled.div`
    margin-top:30px;
`
export const RecommendItem = styled.div`
    width:280px;
    height:50px;
    background:url(${(props)=>props.imgUrl}) no-repeat center;
    background-size:contain;
    margin-bottom:5px;
`

export const Code = styled.div`
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;
    min-height:60px;
    padding: 7px 10px;
    margin-top:10px;
    position:relative;
    .leftImg{
        float:left;
        width:60px;
        height:60px;
        margin-right:10px;
        
    }
`
export const CodeRight = styled.div`
    h4{
        padding:5px 0px 15px 0px;
        .iconfont{
            margin-left:10px;
        }
    }
    p{
        font-size:12px;
        color: #999;
    }
`

export const ShowCode=styled.div`
    width:120px;
    height:120px;
    padding:10px;
    border:1px solid #666;
    position:absolute;
    background:#fff;
    bottom:80px;
    border-radius:5px;
    img{
        width:120px;
        height:120px;
        display:block;
    }
`

export const WriteWrapper = styled.div`
    margin-top:20px;
`

export const WriteTitle = styled.div`
    color: #969696;
    span{
        float:right;
    }
`

export const WriteItem = styled.div`
    margin-top:15px;
    position:relative;
    img{
        width:48px;
        height:48px;
        border-radius:50%;
        float:left;
        margin-right:10px;
    }
`

export const WriteItemDes = styled.div`
   
    padding-top:2px;
    h3{
        color:#333;
        margin-bottom:12px;

    }
    p{
        font-size:12px;
        color: #969696;
    }
`
export const WriteItemBtn = styled.a`
    width:40px;
    height:20px;
    line-height:20px;
    color:#42c02e;
    font-size:13px;
    position:absolute;
    top:0px;
    right:0px;
    .iconfont{
        font-size:12px;
        margin-right:2px;
    }
`