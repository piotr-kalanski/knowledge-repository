import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


// function addDays(date, days) {
//     var newDate = new Date(date.valueOf());
//     newDate.setDate(newDate.getDate() + days);
//     return newDate;
// }

function addMonth(date) {
    return new Date(date.getFullYear(), date.getMonth()+1, 1);
}


function getAllMontsBetweenDates(startDate, stopDate) {
    var dateArray = [];
    var currentDate = startDate;
    while (currentDate <= stopDate) {
        dateArray.push(new Date (currentDate));
        currentDate = addMonth(currentDate);
    }
    return dateArray;
}

function formatDate(date) {
    return date.getFullYear() + '-' + (date.getMonth() + 1);
}

const ExampleTimeSeriesCharts = props => {
    const dates = props.values.map(v => v.date);
    const minDate = dates.reduce(function (a, b) { return a < b ? a : b; });
    const maxDate = dates.reduce(function (a, b) { return a > b ? a : b; });
    const allMonths = getAllMontsBetweenDates(minDate, maxDate).map(m => formatDate(m));

    const valueByDate = {};
    props.values.forEach(v => valueByDate[formatDate(v.date)] = v.value);

    const values = allMonths.map(month => (
        {
            date: month,
            value: valueByDate[month] || 0
        }
    ));

    return (
        <LineChart
            width={500}
            height={300}
            data={ values }
            margin={{
                top: 5, right: 30, left: 20, bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#82ca9d" />
        </LineChart>
    );
}

export default ExampleTimeSeriesCharts;