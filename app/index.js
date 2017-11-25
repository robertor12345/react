import React from  'react';
import ReactDOM from 'react-dom';
import {WebsiteHeader} from './components/WebsiteHeader/WebsiteHeader';
import {WebpageContainer} from './components/WebpageContainer/WebpageContainer';


ReactDOM.render(
    <WebsiteHeader websitetitle= "Roberto's online portfolio"/>,
    <WebpageContainer/>,
    document.getElementById('app')
);
