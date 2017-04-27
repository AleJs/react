"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// const Hello = props =>{
//     return (

//         <h1>{props.funcion}</h1>
//     )
// };

// ReactDOM.render(<Hello funcion="holaaaaa"/>, document.getElementById('app'));

//estados y eventos
// class  Hello extends React.Component{

//         constructor(props){
//             super(props);
//             this.state = {
//                 name: 'hola'
//         }

//     }
//         chao = ()=>{
//             this.setState({name : 'chao'

//     }  )
//     };  
//     render(){
//         return (
//             <h1 onClick={this.chao}>ay ya yai{this.state.name}</h1>
//         )
//     }
// }
// ReactDOM.render(<Hello />, document.getElementById('app'));


var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.up = function (e) {
            e.preventDefault();
            _this.setState(function (prevState) {
                return {
                    count: prevState.count + 1
                };
            });
        };

        _this.down = function (e) {
            e.preventDefault();
            _this.setState(function (prevState) {
                if (prevState.count >= 1) {

                    return {
                        count: prevState.count - 1 };
                }
            });
        };

        _this.reset = function (e) {
            e.preventDefault();
            _this.setState({ count: 0 });
        };

        _this.state = {
            count: 0
        };

        return _this;
    }

    _createClass(Counter, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "hola" },
                React.createElement(
                    "div",
                    { className: "hey" },
                    " ",
                    this.state.count
                ),
                React.createElement(
                    "div",
                    { className: "hola" },
                    React.createElement(
                        "a",
                        { href: "#", onClick: this.up },
                        "Up"
                    ),
                    React.createElement(
                        "a",
                        { href: "#", onClick: this.down },
                        "down"
                    ),
                    React.createElement(
                        "a",
                        { href: "#", onClick: this.reset },
                        "reset"
                    )
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, null), document.getElementById('app'));