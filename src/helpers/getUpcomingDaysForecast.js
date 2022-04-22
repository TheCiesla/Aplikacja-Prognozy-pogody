import moment from 'moment';
//Dane do pogody na następne dni
const getWeekday = date => moment(date).format('dddd').substring(0, 3);
//funkcja na otrzymanie danych
const getUpcomingDaysForecast = data =>
    data.slice(1).map(day => ({
        imgUrl: day.weather_state_abbr, //ikonka pogody
        temperature: Math.round(day.max_temp), //temperatura
        weekday: getWeekday(day.applicable_date), //nazwa dnia
    }));

export default getUpcomingDaysForecast;
