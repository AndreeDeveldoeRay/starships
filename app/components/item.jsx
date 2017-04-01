/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-08T04:01:27+01:00
* @Email:  me@andreeray.se
* @Filename: Movie.jsx
 * @Last modified by:   develdoe
 * @Last modified time: 2017-04-01T01:49:46+02:00
*/



var React = require('react'), {connect} = require('react-redux')

var Item = React.createClass({
    render: function () {
        var {title,genre,counter} = this.props
        return (
            <tr>
              <th scope="row">{counter}</th>
              <td>{title}</td>
              <td>{genre}</td>
            </tr>
        )
    }
})
module.exports = connect()(Item)
