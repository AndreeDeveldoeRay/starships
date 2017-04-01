/**
* @Author: Andreee Ray <DevelDoe>
* @Date:   2017-03-05T16:09:24+01:00
* @Email:  me@andreeray.se
* @Filename: index.jsx
 * @Last modified by:   develdoe
 * @Last modified time: 2017-04-01T01:46:18+02:00
*/

var axios = require('axios')

export var changeAppName = (appName) =>
{
    return {
        type: 'CHANGE_APP_NAME',
        appName
    }
}
export var changeStatus = (status) => {
    return {
        type: 'CHANGE_STATUS',
        status
    }
}
export var addMovie = (title,genre) =>
{
    return {
        type: 'ADD_MOVIE',
        title,
        genre
    }
}
export var removeMovie = (id) =>
{
    return {
        type: 'REMOVE_MOVIE',
        id
    }
}
export var startLocationFetch = () =>
{
    return {
        type: 'START_LOCATION_FETCH'
    }
}
export var fetchLocation = () =>
{
    return (dispatch, getState) =>
    {
        dispatch(changeStatus("Fetching"))
        dispatch(startLocationFetch())
        axios.get('http://ipinfo.io').then(function (res) {
            var loc = res.data.loc
            var baseUrl = 'http://maps.google.com?q='
            dispatch(completeLocationFetch(baseUrl+loc))
            dispatch(changeStatus("idle"))
        })

    }
}
export var completeLocationFetch = (url) =>
{
    return {
        type: 'COMPLETE_LOCATION_FETCH',
        url
    }
}
