import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Button } from 'perscitus-react-components';
import InfoCard from './lib/InfoCard'

const data = [ 'Perscitus', 'Manish', 'Santosh' ]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Button label="Raj" />
    <Button label="perscitus" />

    <div>
      <h5>Notifications</h5>
      <div className='d-flex'>
        {data.map(name => <InfoCard Component={() => 
        <Button label={name} />} />)}
      </div>
    </div>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
