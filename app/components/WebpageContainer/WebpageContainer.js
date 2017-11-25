import React from  'react';
import ReactDOM from 'react-dom';
import {NavigationBar} from '../NavigationBar/NavigationBar'


export class WebpageContainer extends React.Component {
    
      handleClick(){
        alert("I said dont click it!");
      }
  
      render() {
  
      return (
        <NavigationBar onClick={this.handleClick}/>
    );
  
      }
    };