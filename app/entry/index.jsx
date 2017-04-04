/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-13T13:54:41+01:00
* @Email:  me@andreeray.se
* @Filename: app.jsx
 * @Last modified by:   develdoe
 * @Last modified time: 2017-04-02T20:51:23+02:00
*/

var React = require('react'),
    ReactDOM = require('react-dom'),
    {Provider} = require('react-redux'),
    Ship = require('ship')

var store = require('store').store(),
    actions = require('actions')

var appName = "Star Ships"
document.title = appName

// Redux
// ######################################
var unsubscribe = store.subscribe(() =>{
    var state = store.getState()
})

store.dispatch(actions.changeStatus('Scripting'))
store.dispatch(actions.changeAppName(appName))

// Bootstraping
// ########################################

// Bootstrap
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<Provider store={store}><Ship/></Provider>, document.getElementById('app'))
