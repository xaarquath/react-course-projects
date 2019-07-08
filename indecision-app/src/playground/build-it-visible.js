const appRoot = document.getElementById('app');

let visible = false;

const showOrHide = () => {
    visible = !visible;
    render();
};

const render = () => {
    const template = (
        <div>
            <h1>Visibility toggle</h1>
            <p>
                <button id="showBtn" onClick={showOrHide}>{visible ? 'Hide details' : 'Show details'}</button>
            </p>
            {visible && <p>Hey! This are some details you can now see!</p>}
        </div>
    );

    ReactDOM.render(template, appRoot);
};

render();