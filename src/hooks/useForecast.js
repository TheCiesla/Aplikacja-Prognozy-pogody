import { useState } from 'react';
import axios from 'axios'; //axios używany do komunikacji z API
//Komponenty
import getCurrentDayForecast from '../helpers/getCurrentDayForecast'; 
import getCurrentDayDetailedForecast from '../helpers/getCurrentDayDetailedForecast';
import getUpcomingDaysForecast from '../helpers/getUpcomingDaysForecast';
//Dane Api
const BASE_URL = 'https://www.metaweather.com/api/location'; //bazowe URL ze strony metaweather - API do wyszukania lokazji
const CROSS_DOMAIN = 'https://the-ultimate-api-challenge.herokuapp.com'; //URL potrzebne do ominięcia blokady requesta przez przeglądarke
const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`; //aktualne użycie URL w requestach 

const useForecast = () => {
    const [isError, setError] = useState(false); //funkcja w przypadku wystąpienai błedu
    const [isLoading, setLoading] = useState(false); //funckja do wywołania ładowania
    const [forecast, setForecast] = useState(null);  //funkcja otrzymania danych pogody
   
    //funkcja do otrzymania danych lokalizacji
    const getWoeid = async location => {
        const { data } = await axios(`${REQUEST_URL}/search`, { params: { query: location } });
        //pętla do sprawdzenia otrzymania danych 
        if (!data || data.length === 0) {
            setError('Nie ma takiej lokacji');
            setLoading(false);
            return;
        }
        //zwrócene danych
        return data[0];
    };
    //funkcja do otrzymania danych pogody
    const getForecastData = async woeid => {
        const { data } = await axios(`${REQUEST_URL}/${woeid}`);
        //pętla do sprawdzenia otrzymania danych
        if (!data || data.length === 0) {
            setError('Coś poszło nie tak');
            setLoading(false);
            return;
        }
        return data;
    };
    //imporotwanie danych do komponentów 
    const gatherForecastData = data => {
        const currentDay = getCurrentDayForecast(data.consolidated_weather[0], data.title); //otrzymanie pierwszego "wyniku" dla opisu 
        const currentDayDetails = getCurrentDayDetailedForecast(data.consolidated_weather[0]); //otrzymanie pierwszego "wyniku" dla opisu 
        const upcomingDays = getUpcomingDaysForecast(data.consolidated_weather);//otrzymanie wszystkich danych dla nadchodzacych dni 

        setForecast({ currentDay, currentDayDetails, upcomingDays }); //
        setLoading(false); //zatrzymanie ładowania 
    };
    //Zawołanie API  
    const submitRequest = async location => {
        setLoading(true); // wywołąnie rozpoczecie ładowania
        setError(false); //wywołanie w przypadku błędu

    //Otrzymanie lokalizacji (Stolica)
        const response = await getWoeid(location);
        if (!response?.woeid) return; //zatrzymanie funckji w przypadku bledu (braku otrzymania danych)
    //Otrzymanie akutalnej pogody    
        const data = await getForecastData(response.woeid);
        if (!data) return; //zatrzymanie funckji w przypadku bledu (braku otrzymania danych)

        gatherForecastData(data); //podanie danych dla komponentu
    };  
    return {
        isError,
        isLoading,
        forecast,
        submitRequest,
    };
};
export default useForecast;
