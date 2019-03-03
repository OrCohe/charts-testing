import React from 'react';
import { Chart } from "react-google-charts";

const options = {
  legend: 'none',
  pieHole: 0,
  is3D: false,
  backgroundColor: "transparent",
  slices: []
};
const options2 = {
  legend: 'none',
  pieHole: 0,
  is3D: false,
  backgroundColor: "transparent",
  pieSliceBorderColor: 'black',
  pieSliceTextStyle: {
    color: 'black',
  },
  slices: []
};
const BigCircle = ({data}) => { 
  const allData = [];
  const allGroup = [['name','sum']];
  data.forEach((data, index) => {
    if (index > 0) {
      options.slices.push({color: data[2]});
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
        <div style={{ position: 'absolute', width: '100%' }}>
          <Chart
            chartType="PieChart"
            width="100%"
            height="600px"
            data={allGroup}
            options={options2}
          />
        </div>
        <div style={{ position: 'absolute', width: '100%', top: '100px' }}>
          <Chart
            chartType="PieChart"
            width="100%"
            height="400px"
            data={allData}
            options={options}
          />    
        </div>
      </div>
    );
}

export default BigCircle;





