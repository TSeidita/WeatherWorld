// API Key:  key=29a393d9438a495c90a204319210406
// https://www.weatherapi.com/my/''
let data = '';
let parsedData = '';
let locData = {};
let locWeather = {};

const key = "29a393d9438a495c90a204319210406"

async function getAPI(input) {
    //Fetching the information
    let data = await fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${input}`)
        .then(data => data.json())
    //storing the data for easy access
    locData = (data.location);
    locWeather = (data.current);
    return data;
}

document.getElementById("submit").addEventListener("click", function (e) {
    e.preventDefault();
    //Collect the input information
    let input = document.getElementById("location").value;
    //Wait for answer from weatherapi then update the UI
    parsedData = getAPI(input).then(updateUI);
})

function updateUI() {
    let local = document.getElementById("local");
    // local.innerText = "";
    // local.innerText = `Here's the weather for ${locData.name}, ${locData.region}, ${locData.country}`;
    let localWeather = document.getElementById("localweather");
    localWeather.innerText = "";
    localWeather.innerText = `The weather in ${locData.name}, ${locData.region}, ${locData.country} is currently ${locWeather.condition.text}.`;
    let bigtemp = document.getElementById("bigtemp");
    bigtemp.innerText = "";
    bigtemp.innerText = `${locWeather.temp_f}°F`;
    let feelsLike = document.getElementById("feelslike");
    feelsLike.innerText = "";
    feelsLike.innerText = `Feels like ${locWeather.feelslike_f}°F`
    let icon = document.getElementById("icon");
    icon.innerHTML = `<img src="${locWeather.condition.icon}">`;
    let humidity = document.getElementById("humidity");
    humidity.innerText = '';
    humidity.innerText = `Humidity: ${locWeather.humidity}`;
    let favicon = document.getElementById("favicon");
    favicon.href = `${locWeather.condition.icon}`;
}

async function defaultCity() {
    //Fetching the information
    parsedData = getAPI(23221).then(updateUI);
    return data;
}
defaultCity();


// { "location": { 
//      "name": "Richmond", 
//      "region": "Virginia",
//      "country": "USA", 
//      "lat": 37.56, 
//      "lon": -77.49, 
//      "tz_id": "America/New_York", 
//      "localtime_epoch": 1622998073, 
//      "localtime": "2021-06-06 12:47" }, 
//     "current": { 
//         "last_updated_epoch": 1622997000, 
//         "last_updated": "2021-06-06 12:30", 
//         "temp_c": 32.2, 
//         "temp_f": 90.0, 
//         "is_day": 1,}
//     "condition": { 
//         "text": "Partly cloudy", 
//         "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png", 
//         "code": 1003 }, 
//         "wind_mph": 0.0, 
//         "wind_kph": 0.0, 
//         "wind_degree": 226, 
//         "wind_dir": "SW",
//         "pressure_mb": 1019.0, 
//         "pressure_in": 30.6, 
//         "precip_mm": 0.0, 
//         "precip_in": 0.0, 
//         "humidity": 52, 
//         "cloud": 25, 
//         "feelslike_c": 38.6, 
//         "feelslike_f": 101.5, 
//         "vis_km": 16.0, 
//         "vis_miles": 9.0, 
//         "uv": 7.0, 
//         "gust_mph": 7.8, 
//         "gust_kph": 12.6 } }
