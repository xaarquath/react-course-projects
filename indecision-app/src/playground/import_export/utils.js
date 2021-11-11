console.log('utils.js is running');

//default exports
export const square = (x) => x * x;
export const add = (a, b) => a + b;

const subtract = (a, b) => a - b;
export default subtract;

//or
//export default (a, b) => a - b;

//named exports
//const square = (x) => x * x;
//const add = (a, b) => a + b;
//const subtract = (a, b) => a - b;
//export { square, add, subtract as default };