import React from  'react';
import {Component} from 'react'
import {Button} from '../Buttons/Buttons'

export class WebsiteHeader extends React.Component {
    render() {

    return (
      <div>
      <p>{this.props.websitetitle}</p>
      </div>
  );

    }
  };