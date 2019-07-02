'use strict';

console.log('app.js is running!');

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecission app'
    ),
    React.createElement(
        'p',
        null,
        'This is some info'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Santiago Calvo'
    ),
    React.createElement(
        'p',
        null,
        'Age: 33'
    ),
    React.createElement(
        'p',
        null,
        'Location: Vitoria'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
