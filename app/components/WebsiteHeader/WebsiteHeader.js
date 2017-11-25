import React from  'react';
import ReactDOM from 'react-dom';
import {Component} from 'react'

export class WebsiteHeader extends React.Component {
    render() {

    return (
      <div className="WebsiteHeaderContainer">
      <p>{this.props.websitetitle}</p>
      </div>
  );

    }
  };