import React from 'react';

export class Button extends React.Component{

    render(){

       return <button onClick={this.props.onClick}> DO NOT CLICK </button>;
    }
    
}