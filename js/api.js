
'use strict';


const api_key = "32e794fb6f5859040247c0b2d6fac4c8";

/**
 * Fetch data from server
 * @param {string} URL API url
 * @param {Function} callback callback 
 */



export const fetchData = function (URL, callback) {

    fetch(`${URL}&appid=${api_key}`)
        .then(res => res.json())
        .then(data => callback(data));
}


export const URL = {

    currentWeather(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric&appid=${api_key}`;
    },

    forecast(lat, lon) {

        return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric&appid=${api_key}`;
    },

    airPollution(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}&appid=${api_key}`;
    },

    reverseGeo(lat, lon) {

        return `https://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5&appid=${api_key}`;
    },

    /**
     * @param {string} query Search query e.g.: "London", "New York"
     */

    geo(query) {
        return `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${api_key}`;
    }
}

