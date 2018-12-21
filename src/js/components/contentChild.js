import React, { Component } from 'react';

export default class ContenChild extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                我是content的子组件（给父页面content传参） <input type='text'  onChange={this.props.models.bind(this)}/>

            </div> 
        )
    }
}