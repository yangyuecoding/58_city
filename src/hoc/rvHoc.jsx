import React from "react";

let RvHoc = (MyCom,flag) => {
    return class Demo extends MyCom{
        render(){
            if(flag > 18){
                return (
                    super.render()
                )
            }else{
                return (
                    <div>
                        请你滚出去
                    </div>
                )
            }
        }
    }
}

export default RvHoc;