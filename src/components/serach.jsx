import React, { Component } from 'react'
import { Serach } from "../styled/serach";
export default class serach extends Component {
    constructor(){
        super();
        this.autoipt = React.createRef();
        this.state = {
            info:"",
            del_btn:false
        }
    }
    componentDidMount(){
        console.log(this.props.location.state.serach);
        this.setState({
            info:this.props.location.state.serach
        })
        this.autoipt.current.focus()
    }   
    change(e){
        //显示删除按钮
        this.setState({
            del_btn:true
        })
        
    }
    goback(){
        this.props.history.go( -1 );
    }
    clear(){
        this.autoipt.current.value = "";
    }
    render() {
        return (
            <div>
               {/* 头部搜索框自动聚焦 */}
               <Serach>
               <div className="header">
                    <i className="iconfont icon-icon-test1 left_icon"></i>
                   <input type="text" ref={this.autoipt} placeholder={ this.state.info } onChange={ e => { this.change(e) }}/>
                   <i className=" iconfont icon-cuowukongxin right_icon" style={ {display:this.state.del_btn?"block":"none"}} onClick={() => { this.clear() } }></i>
                   <span onClick={ () => { this.goback() } }>取消</span>
               </div>
               </Serach>
               {/* 大家都在搜索 */}
            </div>
        )
    }
}
