/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-08T03:39:38+01:00
* @Email:  me@andreeray.se
* @Filename: App.jsx
 * @Last modified by:   develdoe
 * @Last modified time: 2017-04-01T02:17:53+02:00
*/



var React = require('react'),
    {connect} = require('react-redux'),
    Item = require('item'),
    actions = require('actions'),
    Status = require('status')

import { Jumbotron, PageHeader, Button } from 'react-bootstrap';

var App = React.createClass({


    showLocation: function (e) {
        e.preventDefault();
        var win = window.open(this.props.map.url, '_blank')
        win.focus()
    },

    render: function () {
        var {appName, appStatus, array, map} = this.props

        var renderArray = () => {

            if (array.length > 0) {
                return (
                    <div id="array">
                        <h2>The Array:</h2>
                            <table className="table">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Title</th>
                              <th>Genre</th>
                            </tr>
                          </thead>
                          <tbody>
                            {getArrayItems()}
                          </tbody>
                        </table>
                    </div>
                )
            }
        },

        getArrayItems = () => {
            var counter = 0
            return array.map((movie) => {
                counter++
                console.log(counter)
                return (
                    <Item key={movie.id} {...movie} counter={counter}  />
                )
            })
        },

        renderApi = () => {
            if (map.url){
                return (
                    <div id="api">
                        <h2>The Api</h2>
                        <Button onClick={this.showLocation}>Show your location</Button>
                    </div>
                )
            }
        },

        renderApplication = () => {
            if (appStatus === "idle") {
                return (
                    <div>
                        <Jumbotron bsClass="text-center">
                          <h1>{appName}</h1>
                          <p>React app development with Bootstrap</p>
                        </Jumbotron>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6">
                                    {renderArray()}
                                </div>
                                <div className="col-sm-6">
                                    {renderApi()}
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
