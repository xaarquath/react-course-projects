console.log('app.js is running!');

var template = (
    <div>
        <h1>Indecission app</h1>
        <p>This is some info</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

var templateTwo = (
    <div>
        <h1>Santiago Calvo</h1>
        <p>Age: 33</p>
        <p>Location: Vitoria</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
