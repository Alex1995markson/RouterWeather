const proxy = 'https://cors-anywhere.herokuapp.com/';
const API_KEY = 'a863d2bf51461f915d4cb114e08b40db';


// const WEATHER_URL = `${proxy}https://api.darksky.net/forecast/a863d2bf51461f915d4cb114e08b40db/40.7127,-74.0059`;


export function getForecast() {
    return fetch(`${proxy}https://api.darksky.net/forecast/${API_KEY}/40.5127,-74.0059`)
    .then(response => response.json());
    
}


// export {getForecast};