//Dane pogody
const currentDayForecast = data => [
    {
        name: 'Przewidywalność',
        value: data.predictability,
        unit: '%',
    },
    {
        name: 'Wilgotność',
        value: data.humidity,
        unit: '%',
    },
    {
        name: 'Wiatr',
        value: Math.round(data.wind_speed),
        unit: 'km/h',
    },
    {
        name: 'Ciśnienie',
        value: data.air_pressure,
        unit: 'mb',
    },
    {
        name: 'Maksymalna temperatura',
        value: Math.round(data.max_temp),
        unit: '°C',
    },
    {
        name: 'Minimalna temperatura',
        value: Math.round(data.min_temp),
        unit: '°C',
    },
];

export default currentDayForecast;
