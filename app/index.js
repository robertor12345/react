var React= require('react');
var ReactDOM= require('react-dom');

import {WebsiteHeader} from './components/App';

var App =
require('./components/App');

ReactDOM.render(
    <WebsiteHeader websitetitle= "Roberto's online portfolio"/>,
    document.getElementById('app')
);
