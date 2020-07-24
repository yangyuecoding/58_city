/*
 * @Description: 希望KEEP REAL
 * @Version: 版本更新中...
 * @Autor: AKAYangYi
 * @Date: 2020-07-17 00:35:01
 * @LastEditors: YangYi
 * @LastEditTime: 2020-07-21 02:03:56
 */ 
import styled from "styled-components";

export const Headercls = styled.div`
    padding:0 0.1rem;
    color:#000;
    ul{
        display: flex;
        align-self: center;
		justify-content: space-between;
    }
    ul li {
        padding:0.1rem 0rem;
    }
    .far{
        margin-right:0.1rem;
    }
    .midToggle .active{
       background:red;
       color:#fff;
    }
    .midToggle span {
        font-size:0.12rem;
        color:red;
        display: inline-block;
        padding:0.05rem;
        border: 1px solid red;
        margin-top:-0.15rem;
        border-radius:0.05rem;
    }
    ul li .login{
        padding-right:0.1rem;
    }
    ul li .login,ul li .books{
        font-size:0.2rem;
    }
`;