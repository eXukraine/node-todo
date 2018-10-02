import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter ,Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';


import AppForm from './components/AppForm';
import Scedule from './components/Scedule';
import All from './components/All'





ReactDOM.render(
    <BrowserRouter>
        <div>  
             <Route path="/" component={App}/>
             <Route path = '/AppForm' component = { AppForm } />
             <Route path = '/Scedule' component = { Scedule }/> 
             <Route path = '/All' component = { All }/>
             
        </div>
    </BrowserRouter>
    , document.getElementById('root') 
);
registerServiceWorker();