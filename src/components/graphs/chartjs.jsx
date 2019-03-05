import React, { Component } from 'react';
import 'chartjs-plugin-datalabels';
import { Bar, Line, Pie } from 'react-chartjs-2';

class Chart extends Component {
    render() {
        const { chartData, displayTitle, location, displayLegend, legendPosition } = this.props
        return (
            <div style={{maxHeight: '1000px', maxWidth: '1000px', position: 'relative'}}>
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
                                color: 'black',
                                formatter: value => {
                                    if (value === null) return null;
                                    console.log(value)
                                    const max = 1258452 ;
                                    return Math.round(value/max*100) + '%';
                                }
                            }
                            
                         },
                        
                    }}
                />
            </div>
        );
    }
}

export default Chart;