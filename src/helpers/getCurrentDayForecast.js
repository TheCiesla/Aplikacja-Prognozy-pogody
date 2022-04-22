import moment from 'moment';
//Dane pogody aktualnego dnia
//funkcja do otrzymania danych
const getCurrentDayForecast = (data, title) => ({
    weekday: moment(data.applicable_date).format('dddd'), //nazwa dnia
    date: moment(data.applicable_date).format('MMMM Do'), //data
    location: title, //lokalizacja (miasto)
    temperature: Math.round(data.the_temp), //temperatura
    weatherIcon: `https://www.metaweather.com/static/img/weather/${data.weather_state_abbr}.svg`, //ikonka pogody
    weatherDescription: data.weather_state_name, //aktualny stan pogody (np, deszcz)
});

export default getCurrentDayForecast;
