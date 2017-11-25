import React from  'react';
import ReactDOM from 'react-dom';
import {Button} from '../Buttons/Buttons'


export class WebpageContainer extends React.Component {
    
      handleClick(){
        alert("I said dont click it!");
      }
  
      render() {
  
      return (
        <Button onClick={this.handleClick}/>
    );
  
      }
    };