//import './utils.js';

///////////////
// utils app //
///////////////
/*import anyName, { add, square} from './utils.js';//anyName refers to the default export subtract

console.log('app.js is running');
console.log(square(4));
console.log(add(100, 23));
console.log(anyName(100, 80));//prints 20*/

////////////////
// person app //
////////////////
/*import isSenior, {isAdult, canDrink} from './person.js';

console.log('app.js is running');
console.log(isAdult(18));
console.log(canDrink(18));
console.log(isSenior(64));*/

///////////////////
// validator app //
///////////////////
/*import validator from 'validator';

console.log(validator.isEmail('test'));*/

///////////////
// react app //
///////////////
import React from 'react';
import ReactDOM from 'react-dom';

const template = <p>THIS IS JSX FROM WEBPACK</p>;
ReactDOM.render(template, document.getElementById('app'));