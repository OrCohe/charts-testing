import React, { Component } from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component {
    render() { 
        const { chartData, displayTitle, location, displayLegend, legendPosition } = this.props
        return ( 
            <div>
                <Pie
                    data={chartData}
                    options={{
                        title: {
                            display: displayTitle,
                            text: 'Largest Cities In ' + location,
                            fontSize: 25
                        },
                        legend: {
                            display: displayLegend,
                            position: legendPosition
                        }
                    }}
                />
            </div>
         );
    }
}
 
export default Chart;