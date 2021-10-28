import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import getData from './utils/getLocalData'

(async function (){
  const { products } = await getData('products')
  ReactDOM.render(
    <React.StrictMode>
      <App data={products}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
})();
