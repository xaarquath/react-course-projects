'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//VisibilityToggle - render, constructor, handleToggleVisibility
//visibility -> false

var VisibilityToggle = function (_React$Component) {
    _inherits(VisibilityToggle, _React$Component);

    function VisibilityToggle(props) {
        _classCallCheck(this, VisibilityToggle);

        var _this = _possibleConstructorReturn(this, (VisibilityToggle.__proto__ || Object.getPrototypeOf(VisibilityToggle)).call(this, props));

        _this.handleToggleVisibility = _this.handleToggleVisibility.bind(_this);
        _this.state = {
            visible: false
        };
        return _this;
    }

    _createClass(VisibilityToggle, [{
        key: 'handleToggleVisibility',
        value: function handleToggleVisibility() {
            this.setState(function (prevState) {
                return {
                    visible: !prevState.visible
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Visibility toggle'
                ),
                React.createElement(
                    'p',
                    null,
                    React.createElement(
                        'button',
                        { id: 'showBtn', onClick: this.handleToggleVisibility },
                        this.state.visible ? 'Hide details' : 'Show details'
                    )
                ),
                this.state.visible && React.createElement(
                    'p',
                    null,
                    'Hey! This are some details you can now see!'
                )
            );
        }
    }]);

    return VisibilityToggle;
}(React.Component);

ReactDOM.render(React.createElement(VisibilityToggle, null), document.getElementById('app'));

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
