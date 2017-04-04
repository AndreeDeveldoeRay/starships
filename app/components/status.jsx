/**
 * @Author: Andreee Ray <develdoe>
 * @Date:   2017-04-01T01:03:22+02:00
 * @Email:  me@andreeray.se
 * @Filename: status.jsx
 * @Last modified by:   develdoe
 * @Last modified time: 2017-04-02T20:36:05+02:00
 */



 var React = require('react'),
     {connect} = require('react-redux')

 var status = React.createClass({
     render: function () {
         var {status} = this.props
         return (
             <li>{status}</li>
         )
     }
 })
 
 module.exports = connect()(status)
