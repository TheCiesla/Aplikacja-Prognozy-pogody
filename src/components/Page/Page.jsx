import React, { Fragment } from 'react';

import Header from '../Header';
import Form from '../Form';
import Error from '../Error';
import Loader from '../Loader';
import Forecast from '../Forecast';

import useForecast from '../../hooks/useForecast';

import styles from './Page.module.css';

const Page = () => {
    const { isError, isLoading, forecast, submitRequest } = useForecast();
    {/* Połączenie z hookiem */}
    const onSubmit = value => {
        submitRequest(value);
    };

    return (
        <Fragment>
            <Header />
            {/* Tu wyświetlane sa najważniejsze rzeczy, tj colorbox w tle, searchbar */}

            {/* warunek jeśli nie mamy danych */}
            {!forecast && (
                <div className={`${styles.box} position-relative`}>
                    {/* Form */}
                    {!isLoading && <Form submitSearch={onSubmit} />}
                    {/* Error */}
                    {isError && <Error message={isError} />}
                    {/* Loader */}
                    {isLoading && <Loader />}
                </div>
            )}
            {/* Forecast */}
            {forecast && <Forecast forecast={forecast} />} {/* "podanie danych dla komponentu" */}
        </Fragment>
    );
};

export default Page;
