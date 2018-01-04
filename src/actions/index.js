import axios from 'axios';

const API_KEY = '7d76654d84fd80a9575b6fb55f5a414a';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

/**
 * This action creator is responsible for creating an action
 * that contains a request to the backend API.
 *
 * This action creator takes a city(string) as parameter, and
 * use it as part of the search query.
 *
 * The axios library is essentially behaves exactly like the
 * JQuery method which reaches out and does an AJAX request
 * in the form of getting to the URL and returning a Promise.
 *
 * This Promise will be passed to the action as payload.
 * This action type is FETCH_WEATHER.
 */
export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    // console.log('Request:', request);

    return {
        type: FETCH_WEATHER,
        payload: request // no need to worry about Promise, ReduxPromise will handle it
    };
}
