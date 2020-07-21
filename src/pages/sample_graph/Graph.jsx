import * as React from 'react';
import { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import {ComposedChart, XAxis, YAxis, Tooltip, CartesianGrid, Bar} from 'recharts';

const data = [
    { name: 'Java', "レベル": 5 },
    { name: 'PHP', "レベル": 0 },
    { name: 'Python', "レベル": 1 },
    { name: 'Ruby', "レベル": 4 },
    { name: 'JavaScript', "レベル": 3 },
];

const Graph = () =>  {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        setChartData(data);
    },[]);

    return (
      <Paper>
        <ComposedChart
            width={600}
            height={280}
            layout="vertical"
            data={chartData}
            margin={{ top: 20, right: 60, bottom: 0, left: 150 }}
        >
        <XAxis
            type="number"
            domain={['0','1','2','3','4','5']} //軸の表示領域を指定
        />
        <YAxis
            type="category"
            dataKey="name"
        />
        <Tooltip />
        <CartesianGrid
            stroke="#f5f5f5"
        /> 
        <Bar
            dataKey="レベル"
            barSize={20}
            stroke="rgba(34, 80, 162, 0.2)"
            fillOpacity={1}
            fill="#2250A2"
        />
        </ComposedChart>
      </Paper>
    );
}

export default Graph;