import React, { Component } from 'react'

const Weather = props => (
    <div className="infoWeath">
        { props.city &&
            <div key={props.city}>
                <p>Місцезнаходження: {props.city}, {props.country}</p>
                <p>Температура: {props.temp}</p>
                <p>Тиск: {props.pressure}</p>
                <p>Захід сонця: {props.sunset}</p>
            </div>
        }
        <p className="error">{props.error}</p>
    </div>
);

export default Weather