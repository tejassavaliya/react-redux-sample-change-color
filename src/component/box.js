import React from 'react';

class Box extends React.Component{
    render () {
        return(
            <div className="wrapper" style={{backgroundColor:`${this.props.color}`}}>
                <div  className="box">
                    <button onClick={() => {this.props.handleClick()}}> Change Color </button>
                </div>
            </div>
        )
    }
}
export default Box;
