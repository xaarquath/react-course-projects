console.log('app.js is running!');

let app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

const appRoot = document.getElementById('app');

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const removeAll = () => {
    app.options = [];
    render();
};

const makeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{(app.options && app.options.length > 0) ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <p>
                <button disabled={app.options.length === 0} onClick={makeDecision}>What should I do?</button>
                <button onClick={removeAll}>Remove All</button>
            </p>
            <ol>
                {
                    app.options.map((option) => {
                      return <li key={option}>{option}</li>  
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

render();