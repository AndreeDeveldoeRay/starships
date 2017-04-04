/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-08T03:39:38+01:00
* @Email:  me@andreeray.se
* @Filename: App.jsx
 * @Last modified by:   develdoe
 * @Last modified time: 2017-04-05T01:24:09+02:00
*/



var React = require('react'),
    {connect} = require('react-redux'),
    Item = require('item'),
    actions = require('actions'),
    Status = require('status')

import { Jumbotron, PageHeader, Button } from 'react-bootstrap';

var App = React.createClass({

    getInitialState() {
        var that = this
        return {
            ships: [],
            myGameArea: {
                canvas : document.createElement("canvas"),
                start : function() {
                    this.canvas.width = 480;
                    this.canvas.height = 270;
                    this.context = this.canvas.getContext("2d");
                    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
                    this.interval = setInterval(that.updateGameArea, 20);
                },
                clear : function() {
                    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
                }
            }
        }
    },

    updateGameArea() {
        this.state.myGameArea.clear()
        this.state.redGamePiece.x += 1;
        this.state.yellowGamePiece.x += 1;
        this.state.yellowGamePiece.y += 1;
        this.state.blueGamePiece.x += 1;
        this.state.blueGamePiece.y -= 1;
        this.state.redGamePiece.update();
        this.state.yellowGamePiece.update();
        this.state.blueGamePiece.update();
    },

    component(width, height, color, x, y) {
        var that = this
        var component = {}
        component.width = width;
        component.height = height;
        component.x = x;
        component.y = y;
        component.update = function(){
            var ctx = that.state.myGameArea.context;
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
        return component
    },

    componentDidMount() {
        var that = this
        this.props.dispatch(actions.changeStatus("idle"))

        this.state.myGameArea.start()

        this.setState({
            redGamePiece: this.component(75, 75, "red", 10, 10),
            yellowGamePiece: this.component(75, 75, "yellow", 50, 60),
            blueGamePiece: this.component(75, 75, "blue", 10, 110)
        })
    },

    Ship (e) {
        e.preventDefault()

        var name = this.refs.name.value    // Grap the value of input

        var re = /\S+/                      // Regular Expression: Find a non-whitespace character and match any string that contains at leas one

        if (name.lenght > 0 || re.test(name)) {

            console.log("if (name.lenght > 0 || re.test(name))", re.test(name))

            this.refs.name.value = ""       // clear the input field

            var ship = {}
            ship.name = name

            var ships = this.state.ships    // Get the ship array from store
            ships.push(ship)
            this.setState({
                ships: ships
            })

        } else {
            console.console("if (name.lenght > 0 || re.test(name))", re.test(name))
            this.refs.name.focus()
        }
    },

    render () {
        var

        {appName, appStatus, array, map} = this.props,
        {code} = this.state,

        renderApplication = () => {
            if (appStatus === "idle") {
                return (
                    <div>
                        <Jumbotron bsClass="text-center">
                          <h1>{appName}</h1>
                          <p>Fan site for Start Citizen. Star Ship loadouts.</p>
                        </Jumbotron>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                        <h1>Create new ships</h1>
                                        <label htmlFor="jscode">Name:</label>
                                        <input type="text" ref="name" /><br/>
                                        <Button onClick={this.Ship}>Submit ship</Button>
                                        <p>{code}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                )
            } else {
                return (
                    <div>
                        <span className="blink">{appStatus}</span>
                    </div>
                )
            }
        }

        return renderApplication()
    }
})
module.exports = connect(
    (state) => {
        return {
            appName: state.appName,
            appStatus: state.appStatus,
            array: state.movies,
            map: state.map
        }
    }
)(App)
