import React, { Component } from 'react'
import store from "../store/index";
import actions from "./switchIndexStore/actionCreate";
import Swiper from "swiper";
import { Myslider } from "../styled/slider";
import { getTypeList } from "../api/getTypelist";
import touch from "touchjs"; 
import Hot from "../components/hot"; 
export default class switchIndex extends Component {
    constructor(){
        super();
        //请求数据
        this.state = {
            list:store.getState().indexreducer.arr,
            flag:store.getState().indexreducer.showHead,
            iptval:"",
            typelist:store.getState().indexreducer.typelist
        }
    }
    componentWillMount(){
        getTypeList({slider:"draglist"}).then(ok => {
            //传递数据到 redux 中
            store.dispatch(actions.rendertype(ok));
        })
        .catch( rej => {
            console.log(rej);
            console.log("hello");
        })
    }
    componentDidMount(){
        //监听 store 的改变
        
        store.subscribe( () => {
           
            this.setState({ 
                list:store.getState().indexreducer.arr,
                flag:store.getState().indexreducer.showHead,
                slider:store.getState().indexreducer.list,
                typelist:store.getState().indexreducer.typelist
            })
        })
      
             setTimeout( () => {
                this.setState({
                    slider:store.getState().indexreducer.list
                 })     
                new Swiper ('.swiper-container', {
                    direction: 'horizontal', // 垂直切换选项
                    loop: true, // 循环模式选项
                    // 如果需要分页器
                    pagination: {
                      el: '.swiper-pagination',
                    },
                     autoplay: {
                        delay: 3000,
                        stopOnLastSlide: false,
                        disableOnInteraction: true,
                        },
                    // 如果需要前进后退按钮
                    navigation: {
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev',
                    },
                  }) 
            },500)
        // 使用tocu就是绑定拖拽事件
        touch.on(".first_type","drag",(e) => {
            this.dragfun(e);
        });
    }
    dragfun(e){
        console.log(e,1);
    }
    getStore(){
        let list = {name:"张三",age:21};
        //派发修改操作
        store.dispatch(actions.get(list));
        let flag = !this.state.flag;
        store.dispatch(actions.show( flag ));
    }
    renderSlider(){
        if( !this.state.slider) return false;
        return this.state.slider[0].imgs.map( (v,k) => {
            return (
                <div className="swiper-slide" key={k}>
                    <img src={ v.imgs } alt=""/>
                </div>
            )
        })
       
    }
    changeState(e){
        this.setState({
            iptval:e.target.value
        })
    }
    toSerach(){
        // 前往serach 页面c
        this.props.history.push({pathname:"/serach",state:{serach:this.showinfo.innerHTML}});
    }
    componentWillUnmount(){
        //组件写在的时候，在diemount 可能存在异步方法 没有结束
        this.setState = (state, callback) => {
            return;
          }
    }
    tofenlei(){
        //前往分类页面
        this.props.history.push("/fenlei");
        //往redux 存一下头部的信息
        store.dispatch(actions.change(this.fenlei.innerHTML))
    }
    torank(){
        this.props.history.push("/rank");
        store.dispatch(actions.change(this.rank.innerHTML));
        console.log(store.getState().indexreducer);
    }
    rendertypelist(){
        if(this.state.typelist){
            console.log(this.state.typelist.body);
            return this.state.typelist.body.map((v,k) => {
                return (
                    <Hot type={v.type} key={k} imgs={v.imgs}></Hot>   
                )
            })
        }
        return (
            <p>数据正在加载中</p>
        );
    }
    render() {
        return (
            <div>
                <Myslider>
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            {/* <div className="swiper-slide">Slide 1</div> */}
                            {/* 便利轮播图容器 */}
                            {
                                this.renderSlider()
                            }
                            {/* <div className="swiper-slide">Slide 2</div> */}
                            {/* <div className="swiper-slide">Slide 3</div> */}
                        </div>
                        <div className="swiper-pagination"></div>
                        
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                        
                    </div>
                    {/* 表单输入受控组件 */}
                    <div className="serach_info" onClick={ () => { this.toSerach() } }>
                        <input type="text" id="serach"/>
                        <p>
                            <i className="iconfont icon-icon-test1"></i>
                            <span ref={ (ipt) => { this.showinfo = ipt; }}>我的徒弟都是大反派</span>
                        </p>
                    </div>
                    {/* 分类功能 */}
                    <div className="types">
                        <ul className="lists">
                            <li onClick={ this.tofenlei.bind(this) }><i className="iconfont icon-dali"></i><p ref={ (ipt) => { this.fenlei = ipt } }>分类</p></li>
                            <li onClick={ this.torank.bind(this) } ><i className="iconfont icon-ouzhou"></i><p ref={ (ipt) => { this.rank = ipt }}>排行榜</p></li>
                            <li><i className="iconfont icon-lijiang"></i><p>免费</p></li>
                            <li><i className="iconfont icon-jiaotang"></i><p>完本</p></li>
                            <li><i className="iconfont icon-eluosi-mosikedajuyuan"></i><p>大神</p></li>
                        </ul>
                    </div>
                    {/* 伪装分类 */}
                    {/* <div className="first_type"></div> */}
                    {/* 热门小说组件 */}
                 
                    {
                        this.rendertypelist()
                    }
                </Myslider>
                 {/* // 以及组件 */}
                {/* { this.getStore() } */} 
                {/* //头部组件（组件+登录组件（书架组件） */}
                {/* //轮播图组件 */}
                {/* //主题信息 搜索 + 分类( 有四个二级组件 ) */}
                {/* //书籍分类显示组件 */}
            </div>
        )
    }
}
