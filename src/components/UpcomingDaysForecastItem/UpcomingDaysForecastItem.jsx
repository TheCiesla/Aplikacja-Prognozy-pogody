import React from 'react';
import PropTypes from 'prop-types';

import styles from './UpcomingDaysForecastItem.module.css';

const imgUrlBase = 'https://www.metaweather.com/static/'; //Url z danymi do ikonki
//dodanie danych 
const UpcomingDaysForecastItem = ({ weekday, temperature, imgUrl }) => (
    <li className={`${styles.weekday} d-flex flex-column justify-content-center align-items-center p-2`}>
        <img className="mb-2" width="30" src={`${imgUrlBase}img/weather/${imgUrl}.svg`} alt="" /> {/* ikonka*/}
        <span className="mb-2">{weekday}</span> {/* dzien */}
        <span className="font-weight-bold">{temperature}&deg;</span> {/* temperatura */}
    </li>
);

UpcomingDaysForecastItem.propTypes = {
    weekday: PropTypes.string.isRequired,
    temperature: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
};

export default UpcomingDaysForecastItem;
