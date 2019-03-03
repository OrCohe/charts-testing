import React, { Component } from 'react';
import Circle from './components/graphs/circle';
import BigCircle from './components/graphs/bigCircle';
import Chart from './components/graphs/chartjs';

const data = [
  ['age','sleeping per day'],
  ['10',10,'blue',1],
  ['15',8,'green',1],
  ['20',6,'yellow',2],
  ['25',7,'grey',2],
  ['30',10,'red',3],
  ['35',9,'brown',3],
  ['30',5,'red',3],
  ['35',2,'brown',3]
]
const chartData = {
  labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
  datasets:[
    {
      label:'Population',
      data:[
        617594,
        181045,
        153060,
        106519,
        105162,
        95072
      ],
      backgroundColor:[
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(255, 99, 132, 0.6)'
      ]
    }
  ]
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <BigCircle data={data}/>
        {/* <Chart chartData={chartData} location="Massachusetts" legendPosition="bottom"/> */}
      </div>
    );
  }
}

export default App;
