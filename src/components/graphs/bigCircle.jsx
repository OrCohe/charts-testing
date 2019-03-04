import React from 'react';
import { Chart } from "react-google-charts";

const options = {
  legend: 'none',
  pieHole: 0,
  is3D: false,
  backgroundColor: "transparent",
  pieSliceBorderColor: 'transparent',
  slices: []
};
const options2 = {
  border: 5,
  legend: 'none',
  pieHole: 0,
  is3D: false,
  backgroundColor: "transparent",
  pieSliceBorderColor: 'white',
  pieSliceTextStyle: {
    color: 'black',
  },
  slices: [],
  chartArea: {
    stroke: '#4322c0',
    strokeWidth: 5
  }
};
const BigCircle = ({data}) => { 
  const allData = [];
  const allGroup = [['name','sum']];
  data.forEach((data, index) => {
    if (index > 0) {
      options.slices.push({color: data[2], offset: 0});
      if (!allGroup[data[3]]) {
        options2.slices.push({color: 'transparent'});
        allGroup[data[3]] = [data[0],data[1]];
      } else {
        allGroup[data[3]][1] += data[1];
      };
    } 
    allData.push([data[0],data[1]]);
  });
    return (
      <div style={{position: 'relative'}}>
        
        <div style={{ position: 'absolute', width: '100%', top: '100px', right: '10px' }}>
          <Chart
            chartType="PieChart"
            width="100%"
            height="400px"
            data={allData}
            options={options}
          />    
        </div>
        <div style={{ position: 'absolute', width: '100%' }}>
          <Chart
            chartType="PieChart"
            width="100%"
            height="600px"
            data={allGroup}
            options={options2}
          />
        </div>
      </div>
    );
}

export default BigCircle;





