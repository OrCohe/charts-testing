import React from "react";
import Chart from "react-google-charts";

const pieOptions = {
    title: "",
    pieHole: 0.1,
    legend: 'none',
    tooltip: {
  },
  chartArea: {
    left: 0,
    top: 0,
    width: "100%",
    height: "80%"
  },
  fontName: "Roboto"
};
class Test extends React.Component {
  state = {
    chartImageURI: ""
  };
  render() {
    return (
      <div>
        <div style={{position: 'absolute', width: '100%'}}>
            <Chart
              chartType="PieChart"
              data={[["Age", "Weight"], ["a", 12], ["b", 5.5], ["b", 5.5], ["b", 5.5], ["b", 5.5], ["b", 5.5] , ["b", 5.5]]}
              options={pieOptions}
              graph_id="PieChart"
              width={"100%"}
              height={"400px"}
              backgroundColor="transparent"
            />
        </div>
        <div style={{position: 'absolute', width: '100%'}}>
            <Chart
              chartType="PieChart"
              data={[["Age", "Weight"], ["a", 12], ["b", 5.5], ["b", 5.5], ["b", 5.5], ["b", 5.5], ["b", 5.5] , ["b", 5.5]]}
              options={pieOptions}
              graph_id="PieChart"
              width={"100%"}
              height={"600px"}
              backgroundColor="transparent"
            />
        </div>
      </div>
    );
  }
}

export default Test