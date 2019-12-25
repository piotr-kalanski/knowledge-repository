import React from 'react';
import './App.css';
import ExampleLineChart from './components/ExampleLineChart';
import ExampleTimeseriesChart from './components/ExampleTimeseriesChart';

function App() {
  const timeSeriesData = [
    {"date": new Date("2019-01"), "value": 10},
    {"date": new Date("2019-02"), "value": 20},
    {"date": new Date("2019-04"), "value": 15},
    {"date": new Date("2019-05"), "value": 15},
    {"date": new Date("2019-08"), "value": 16},
    {"date": new Date("2020-01"), "value": 8},
  ];

  return (
    <div className="App">
        <ExampleLineChart />
        <ExampleTimeseriesChart values={ timeSeriesData } />
    </div>
  );
}

export default App;
