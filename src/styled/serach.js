/*
 * @Description: 希望KEEP REAL
 * @Version: 版本更新中...
 * @Autor: AKAYangYi
 * @Date: 2020-07-20 22:58:01
 * @LastEditors: YangYi
 * @LastEditTime: 2020-07-21 14:31:30
 */ 
import styled from "styled-components";
export const Serach = styled.div`
    .header input{
        width:80%;
        height:30px;
        line-height:30px;
        text-indent:2em;
    }
    input:focus{
        border:1px solid orange;
    }
    .header span {
        width:18%;
        height:30px;
        margin-top:2px;
        vertical-align:middle;
        display:inline-block;
        text-align:center;
        line-height:30px;
    }
    .header{
        position:relative;
    }
    .header,.header input ,.header i{
        font-size:20px;
    }
    i{
        position:absolute;
    }
    .left_icon{
        left:10px;
        top:5px;
    }
    .right_icon{
        right:88px;
        top:5px;
    }
`;