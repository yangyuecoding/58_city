/*
 * @Description: 希望KEEP REAL
 * @Version: 版本更新中...
 * @Autor: AKAYangYi
 * @Date: 2020-07-19 23:30:21
 * @LastEditors: YangYi
 * @LastEditTime: 2020-07-21 20:07:59
 */ 
import styled from "styled-components";
export const Myslider = styled.div`
    .swiper-container {
        width: 95%;
        height: 150px;
        overflow:hidden;
        margin:0 auto;
    }
    .swiper-container img {
        width: 100%;
        height: 100%;
    }  
    .serach_info{
        position:relative;
        background:#f6f7f9;
    }  
    #serach{
        width:95%;
        border:none;
        outline:none;
        margin:0 auto;
        height:40px;
        line-height:40px;
        background:white;
        font-size:0.18rem;
    }
    .serach_info p {
        position:absolute;
        top:15px;
        left:120px;
    }
    .lists{
        text-align:center;
        display:flex;
        justify-content:space-around;
    }
    .lists i{
        font-size:0.2rem;
    }
    .serach_info{
        text-align:center;
        padding:0.05rem 0;

    }
    .first_type{
        width:100%;
        height:400px;
        background:#f00;
    }
`;