/*
 * @Description: 希望KEEP REAL
 * @Version: 版本更新中...
 * @Autor: AKAYangYi
 * @Date: 2020-07-17 19:47:07
 * @LastEditors: YangYi
 * @LastEditTime: 2020-07-18 10:30:21
 */ 
import styled from "styled-components";
export const MyLogin  = styled.div`
    i{
        font-size:0.35rem;
        display:inline-block;
        padding-left:0.15rem;
        padding-top:0.1rem;
    }
    .topimg{
        width:100%;
    }
    .topimg img{
        width:100%;
    }
    .mid_icon{
        text-align: center;
        
    }
    .mid_icon img{
        width:0.53rem;
        margin-top:0.2rem;
    }
    .login_box{
        width:80%;
        margin:0 auto;
    }
    
    .login_box i {
        font-size:0.2rem;
        display:inline-block;
    }
    .login_box > div{
        vertical-align: middle;
        border-bottom:1px solid #EEE;
    }
    .login_box input{
        height: 0.4rem;
        line-height:0.4rem;
        outline:0;
        border:0;
        text-indent:2em;
        font-size:0.16rem;
    }
    .toregister{
        font-size: 0.12rem;
        padding: 0.2rem 0.2rem;
		color: #0000FF;
    }
    .toregister span:nth-of-type(2){
        float:right;
    }
    #login{
        padding:0.2rem 0rem;
        width:90%;
        background:linear-gradient(to right, #EE434C, #F14B4E);
        margin:0 auto;
        border-radius: 0.4rem;
        text-align: center;
    }
    #login button{
        display:inline-block;
        background: transparent;
        outline: 0;
        border: 0;
        font-size:0.16rem;
        color:#fff;
    }
`;