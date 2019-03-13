const fetch = require('node-fetch')
global.Headers = fetch.Headers

module.exports = async (context, req) => {

    // return confirmation immediately
    context.res = {
        status: 202
    }

    // broadcast alert via baloo
    await fetch("https://baloo.azurewebsites.us/alert", {
        method: 'POST',
        headers: new Headers({
            'Authorization': 'Bearer ' + process.env.BALOO,
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
            appName: req.body.appName,
            errorType: "Client",
            countError: "1",
            time: req.body.time
        })
    })

    // follow up with full error message via baloo
    fetch("https://baloo.azurewebsites.us/clientError", {
        method: 'POST',
        headers: new Headers({
            'Authorization': 'Bearer ' + process.env.BALOO,
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
            errorMessage: req.body.errorMessage
        })
    })
}