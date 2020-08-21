const request = require("request")

const forecast = (latitude, longitude, callback) => {
    const url = "https://api.weatherapi.com/v1/forecast.json?key=7faa88ace70243dfb3a203829201108&q=/" +  latitude + "," + longitude

    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback("Unable to connect to weather service", undefined)
        } else if (body.error) {
            callback("Unable to find location", undefined)
        } else {
            callback(undefined, body.current.condition.text + " It is currently " + body.current.temp_c + " degrees out. " + " There is a " + body.current.precip_mm + "% chance of rain.")
        }
    })
    

}

module.exports= forecast