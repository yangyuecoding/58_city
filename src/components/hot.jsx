import React, { Component } from 'react';
import { connect } from "react-redux";
import { Draglist } from "../styled/draglist";
import touch from "touchjs";
class hot extends Component {
    constructor(){
        super();
    }
    shouldComponentUpdate(nextProps,nextState){
        //性能优化
        return nextProps.type !== this.props.type;
    }
    componentDidMount(){
        console.log(this.props.state.indexreducer.typelist.body);
        //给drag绑定拖拽事件
        touch.on(".draglist","touchstart",this.movebegin.bind(this));
        touch.on(".draglist","drag",this.moveing.bind(this));
        touch.on(".draglist","dragend",this.moveend.bind(this));
    }
    choosel(el){
        var el = document.querySelectorAll(el);
        if( el.length > 1 ){
            return [].slice.call(el);
        }else if( el.length === 1 ){
            return el[0];
        }else{
            return false;
        }
    }
    movebegin(e){
        let els = this.choosel(".drag_el")
        //选择元素 不管 拖动时候选中的那个元素，都只移动我档期啊你选中的元素    
        //从容器列表过滤出来目标容器  挂载到this上面去
        //因为每次会选中两个同名的元素，所以需要 双层循环来遍历，当前点击的是哪一个
        for( var i = 0 ; i < els.length ; i++ ){
            for(var j = 0 ;j< e.path.length ; j++){
                if( els[i] === e.path[j]){
                    this.el = els[i];
                    break;
                }
            }
        }
        console.log("抓取中");
        // e.preventDefault();
    }
    moveing(e){
        e.cancelBubble = true;
        var x = e.x;
        //修改drag_list 的位置信息  直接使用  e.x
        x = x >= 0 ? 0:x;
        x = x <= -225 ? -225:x;
        this.el.style.cssText = `transform:translateX(${x}px);`;
    }
    moveend(e){
        console.log("拖住哦结束 ");
    }
    toDetail(id){
        console.log(id)
    }
    renderlist(imgs){
        if( this.props ){
            return imgs.map((v,k) => {
                return (
                    <li key={k} onClick={ this.toDetail.bind(this,v.bookid) }>
                    <img src={v.imgs}/>
                    <p>{v.authoer}</p>
                    <p>{v.name}</p>
                </li>
                )
            })
        }else{
            return (
                <p>数据加载中...</p>
            )
        }
    }
    renderheader(type){
        if(type === "hot"){
            return (
                <p><span></span>热卖头部 <em>起点编辑推荐</em></p>
            )
        }else{
            return (
                <p><span></span>免费头部<em>起点编辑推荐</em><i>更多</i><b className="iconfont icon-next"></b></p>
            )
        }
    }
    render() {                        
       let {type,imgs} = this.props;
        return (
            <div>
                {/* 头部分类 */}
                <Draglist>
                <div className={ type === "hot"?"hot_header":"free_header"}>
                    {
                        this.renderheader(type)
                    }
                </div>
                <div className="draglist">
                    <ul className="drag_el">
                {
                    this.renderlist(imgs)
                }
                    </ul>
               </div>
               </Draglist>
            </div>
        )
    }
}

export default connect(state => ({state}) )(hot)
