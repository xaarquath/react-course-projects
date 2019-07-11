//VisibilityToggle - render, constructor, handleToggleVisibility
//visibility -> false

class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visible: false
        };
    }

    handleToggleVisibility(){
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            };
        });
    }

    render(){
        return (
            <div>
                <h1>Visibility toggle</h1>
                <p>
                    <button id="showBtn" onClick={this.handleToggleVisibility}>{this.state.visible ? 'Hide details' : 'Show details'}</button>
                </p>
                {this.state.visible && <p>Hey! This are some details you can now see!</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// const appRoot = document.getElementById('app');

// let visible = false;

// const showOrHide = () => {
//     visible = !visible;
//     render();
// };

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility toggle</h1>
//             <p>
//                 <button id="showBtn" onClick={showOrHide}>{visible ? 'Hide details' : 'Show details'}</button>
//             </p>
//             {visible && <p>Hey! This are some details you can now see!</p>}
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// };

// render();