import React, { Component } from 'react';
import 'chartjs-plugin-datalabels';
import { Bar, Line, Pie } from 'react-chartjs-2';

class Chart extends Component {
    render() {
        const { chartData, displayTitle, location, displayLegend, legendPosition } = this.props
        return (
            <div style={{height: '1000px', width: '1000px'}}>
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
                        },
                        plugins: {
                            datalabels: {
                               display: true,
                               color: 'black'
                            },
                         },
                        
                    }}
                />
            </div>
        );
    }
}

export default Chart;