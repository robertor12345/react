import React from  'react';
import {Component} from 'react'
import {Button}from './Buttons'

export class WebsiteHeader extends React.Component {
  
    handleClick(){
      alert("I said dont click it!");
    }

    render() {

    return (
      <div>
      <p>{this.props.websitetitle}</p>
      <Button onClick={this.handleClick}/>
      </div>
  );

    }
  };

export default WebsiteHeader;