import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import '../../index.css';

import ContentChild from './contentChild';
import { prototype } from 'eventemitter3';


const USERNAME  =  {     //设置默认值(userName就是父页面传数据的key)
    userName : "我是默认的用户"
}

export default class Content extends Component{
    constructor(){
        super();
      this.state = {
          model : '',
          trck : true
      }
    }
 
   models(e){
       this.setState({
           model : e.target.value 
       });
   }

   Onclick(){
       this.setState({
           trck : !this.state.trck
       });

       //第一种方法
    //    var btn = document.getElementsByClassName('btn')[0];
    //    ReactDOM.findDOMNode(btn).style.color = this.state.trck ? "red" : "yellow";
     

    //第二种方法
    this.refs.btn.style.color = this.state.trck ? "red" : "yellow";
   }

   render(){

     const btnText = () =>{
        return this.state.trck ? "点击1" : "点击2"
     }
     return(
           <div>
             
                <p>{this.props.userid} {this.props.userName}</p>  

                <ContentChild  models = {this.models.bind(this)} {...this.props} />
   
                <p> { this.state.model }</p>

                 { console.log(`我是父页面传来的userid:${this.props.userid}`) }
                 { console.log(`我是父页面传来的userName:${this.props.userName}`) }

                <button onClick = {this.Onclick.bind(this)} className='btn' ref='btn'> {btnText()} </button>

            </div>
       )
   }
} 

Content.propTypes = {
    userid : PropTypes.string.isRequired   //设置参数的类型(userid就是父页面传数据的key)
}
Content.defaultProps = USERNAME;  //设置参数的默认值(USERNAME看上面)