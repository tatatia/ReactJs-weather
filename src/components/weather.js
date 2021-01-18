import React, { Component } from 'react'
 

export default class Weather extends Component {
    render() {
        return (
            <div>
                { this.props.city &&
                    <div>
                        <p>Місцезнаходження: {this.props.city}, {this.props.country}</p>
                        <p>Температура: {this.props.temp}</p>
                        <p>Тиск: {this.props.pressure}</p>
                        <p>Захід сонця: {this.props.sunset}</p>
                    </div>
                }

            </div>
        )
    }
}
