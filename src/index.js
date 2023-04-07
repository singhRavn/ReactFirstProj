import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 2. get a refernce tot he div with ID root
const el = document.getElementById('root');

// 3. tell react to control of the that element
const root = ReactDOM.createRoot(el);

// 4. create a component

// 5. Show the compoennt on the screen
root.render(<App/>);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
