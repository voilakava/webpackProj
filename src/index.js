import React from 'react';
import ReactDOM from 'react-dom';


const name = React.createElement('h1', {}, 'My node');

const container = React.createElement('div', {}, name);

ReactDOM.render(
  container,
  document.getElementById('root')
);

// function component() {
//   const element = document.createElement('div');

//   element.innerHTML = "Some text";
//   console.log("its works");
//   // const root = document.querySelector('#root');
//   return element; 
// }

// document.body.appendChild(component());


// console.log('Hello webpack 2');