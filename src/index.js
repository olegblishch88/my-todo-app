import React from 'react';
import ReactDOM from 'react-dom';
import ToDo from './component/ToDo';
import './css/index.css';

const place = document.getElementById('root');
ReactDOM.render(
    <div> 
      <ToDo />
        <br />
      <ToDo />
        <br />  
      <ToDo /> 
    </div>,place);