/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-13T13:54:41+01:00
* @Email:  me@andreeray.se
* @Filename: app.jsx
 * @Last modified by:   develdoe
 * @Last modified time: 2017-04-01T01:40:40+02:00
*/

var React = require('react'),
    ReactDOM = require('react-dom'),
    {Provider} = require('react-redux'),
    Component = require('component')

var store = require('store').store(),
    actions = require('actions')

var appName = "DevelBootstrap"
document.title = appName

// Redux
// ######################################
var unsubscribe = store.subscribe(() =>{
    var state = store.getState()
})

store.dispatch(actions.changeStatus('Scripting'))
store.dispatch(actions.changeAppName(appName))
store.dispatch(actions.addMovie('Star Wars','Sci-fi'))
store.dispatch(actions.addMovie('Mad Max','Action'))
store.dispatch(actions.addMovie('Logan','Action'))
store.dispatch(actions.removeMovie(1))
store.dispatch(actions.fetchLocation())

// Bootstraping
// ########################################

// Bootstrap
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<Provider store={store}><Component/></Provider>, document.getElementById('app'))
