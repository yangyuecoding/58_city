/*
 * @Description: 希望KEEP REAL
 * @Version: 版本更新中...
 * @Autor: AKAYangYi
 * @Date: 2020-07-18 11:33:45
 * @LastEditors: YangYi
 * @LastEditTime: 2020-07-19 01:34:14
 */ 
import styled from "styled-components";

export const Regcls = styled.div`
    .topbar{
        padding:0 0.1rem;
        font-size:0.2rem;
        padding-bottom:0.05rem;
        border-bottom:1px solid #EEE;
    }
    .topbar i{
        font-size:0.25rem;
    }
    .reg_box{
        width:80%;
        margin:0 auto;
        margin-top:0.3rem;
    }
    .reg_box input{
        width:100%;
        height:0.4rem;
        font-size:0.14rem;
        outline:0;
        border:0;
        margin:0.1rem 0;
        background:#F6F7F9;
        text-indent:2em;
        border-radius:0.2rem;
    }
    .ok{
        width:100%;
        height:0.3rem;
        background:#EEE;
        text-align:center;
        line-height:0.3rem;
        padding:0.1rem 0;
        border-radius:0.2rem;
        font-size:0.16rem;
    }
    .hide{
        display:none;
    }
    .show{
        display:block;
        position:absolute;
        top:0;
        background:#EEE;
        opacity:0.7;
    }
    .okTips{
        text-align:center;
        /* 登录成功提示信息 */
        position:fixed;
        line-height:40px;
        width:250px;
        height:100px;
        right:0;
        left:0;
        top:0;
        bottom:0;
        margin:auto;
    }
    .nowating{
        color:green;
    }
    .gonow{
        color:red;
        font-weight:700;
    }
`;