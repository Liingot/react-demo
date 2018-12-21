import React, { Component } from 'react';

import '../../index.css';

import ContentChild from './contentChild';

export default class Content extends Component{
    constructor(){
        super();
      this.state = {
          model : ''
      }
    }
 
   models(e){
       this.setState({
           model : e.target.value 
       });
   }


   render(){
     return(
           <div>
             
                <p>{this.props.userid} {this.props.userName}</p>  

                <ContentChild  models = {this.models.bind(this)}/>

                <p> { this.state.model }</p>
            </div>
       )
   }
} 
