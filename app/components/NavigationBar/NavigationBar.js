import React from 'react';
import styles from './NavigationBar.css';

export class NavigationBar extends React.Component{

    render(){

       return   (
                <div className="navigationBarContainer">
                <div  className="Bio" onClick={this.props.onClick}> Bio </div>
                <div  className="Projects" onClick={this.props.onClick}> Projects </div>
                <div  className="CV" onClick={this.props.onClick}> CV </div>
                </div>
                );
    }
    
}