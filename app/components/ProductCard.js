import React, {Component}  from 'react';
import ReactDOM from 'react-dom';
import {ForLoop} from './forloop'

export class ProductCard extends Component{

    render(){
        return
        <ul>{this.props.carddata}</ul>;
    }
}

