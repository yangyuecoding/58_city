import React from "react";
let Hoc = (MyCom) => {
    return class Text extends React.Component{
        render(){
           <React.Fragment>
                <MyCom></MyCom>
           </React.Fragment>
        }
    }
}

export default Hoc;