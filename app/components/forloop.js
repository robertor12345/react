import React, {Component}  from 'react';
import ReactDOM from 'react-dom';
import {ProductCard} from './ProductCard';

export class ForLoop extends Component{

    constructor(){
        super();
        this.state = {
            data: []
        };
    };

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then( (response) => {
                return response.json() })   
                    .then( (json) => {
                        this.setState({data: json});
                    });
    };

    render(){

        return (
            <div>
            <ul>
                {this.state.data.map(function(data, index){
                    return
                <ProductCard cardindex={key={index}} carddata={data}/>
                })}
            </ul>
            </div>
                );
            }
    }