import styled from "styled-components";
export const Draglist = styled.div` 
    padding:0 0.1rem;
    overflow:hidden;
    .hot_header,.free_header{
        padding:0.15rem 0;
        overflow:hidden;
        p{
            display:flex;
            justify-content:center;
            float:left;
            font-size:20px;
        }
        em{
            font-size:10px;
           align-self:flex-end;
           margin-bottom:2px;
           margin-left:5px;
        }
        span{
            margin-top:3px;
            margin-right:10px;
            line-height:20px;
            display:inline-block;
            height:20px;
            width:2px;
            background:red;
        }
        i{
            font-size:12px;
            color:gray;
            margin-top:10px;
            margin-left:145px;
        }
        b{
            margin-top:8px;
        }

    }
    .draglist {
        height:131px;
        width:100%;
        position:relative;
        /* transform:translateX(-205px); */
    }
    .draglist ul {
        width:600px;
        transition:all ease 0.5s;
        position:absolute;
    }
    .draglist ul li{
        text-align:center;
        float:left;
        width:82px;
        height:131px;
        p{
            font-size:12px;
        }
    }
    .draglist ul li img {
        width:70%;
    }
   
`