import React, { Component } from 'react';
import Circle from './components/graphs/circle';
import BigCircle from './components/graphs/bigCircle';
import Chart from './components/graphs/chartjs';
import ExpandableTableRow from './components/table/expended';
import Demo from './components/table/dx';

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
      data:
      [
        789639,
        259579,
        200234
      ],
      backgroundColor:
      [
        'transparent',
        'transparent',
        'transparent'
      ],
      hoverBorderWidth: [
        5,5,5
      ],
      hoverBorderColor: [
        'grey','grey','grey'
      ]
    },
    {
      label:'Population',
      data:
      [
        617594,
        181045,
        null,
        153060,
        106519,
        null,
        105162,
        95072,
        null
      ],
      backgroundColor:
      [
        'red',
        'green',
        null,
        'yellow',
        'brown',
        null,
        'blue',
        'brown',
        null
      ],
      borderWidth: [
        0,0,5,0,0,5,0,0,2
      ]
    }
  ]
}
const items = {
  a: "aaaa",
  b: "bbbb",
  c: "cccc",
  d: "dddd",
  e: "eeee",
  f: "ffff"
}
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <BigCircle data={data}/> */}
        {/* <Chart chartData={chartData} location="Massachusetts" legendPosition="right" displayLegend={false} displayTitle={false}/> */}
        {/* <ExpandableTableRow item={items}/> */}
        <Demo />
      </div>
    );
  }
}

export default App;
