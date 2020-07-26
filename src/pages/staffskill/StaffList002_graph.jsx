import * as React from 'react';
import { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import {ComposedChart, XAxis, YAxis, Tooltip, CartesianGrid, Bar} from 'recharts';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        flexGrow: 1,
        width: '100%',
        height: '80%',
        borderRadius: '0px 0px 0px 0px',
        position: 'absolute',
      },
      Graph: {
        flexGrow: 2,
        width: '400px',
        display:'center',
        margin:'40px 0px 0px 120px',
        position: 'absolute',
      },
      Graph2: {
        flexGrow: 2,
        width: '400px',
        display:'center',
        margin:'40px 140px 0px 0px',
        position: 'absolute',
        left: '700px',
      },
      experience: {
        position: 'absolute',
        left: '220px',
        top:'310px',
        color: '#84a2d4',
      },
}));
const Graph = (props) =>  {
    const [chartData, setChartData] = useState([]);
    const classes = useStyles();
    const [chartData2, setChartData2] = useState([]);
    useEffect(() => {
        setChartData(data_level);
        setChartData2(data_assessment);
    },[]);
    const data_level = [
      { name: `${props.skillname}`, "レベル": `${props.level}`},
  ];
  const data_assessment= [
      { name: '自己評価', "レベル": `${props.assessment}` },
  ];
    return (
      <div>
        <div className={classes.Graph}>
        <ComposedChart
            width={400}
          height={280}
            layout="vertical"
            data={chartData}
            margin={{ top: 20, right: 60, bottom: 0, left: 10 }}
        >
        <XAxis  
            type="number"
            domain={[0, 'Max 10']}
            ticks={[0,2,4,6,8,10]} //軸の表示領域を指定
        />
        <YAxis
            type="category"
            dataKey="name"
        />
        <Tooltip />
        <CartesianGrid
            stroke="#F5F5F5"
            type="category"
            dataKey="経験年数"
        /> 
        <Bar
            dataKey="レベル"
            barSize={20}
            stroke="rgba(34, 80, 162, 0.2)"
            fillOpacity={1}
            fill="#2250A2"
        />
        </ComposedChart>
        </div>

        <div className={classes.Graph2}>
        <ComposedChart
            width={400}
            height={280}
            layout="vertical"
            data={chartData2}
            margin={{ top: 20, right: 10, bottom: 0, left: 0 }}
        >
        <XAxis
            type="number"
            domain={[0, 'Max 10']}
            ticks={[0,2,4,6,8,10]} //軸の表示領域を指定
        />
        <YAxis
            type="category"
            dataKey="name"
        />
        <Tooltip />
        <CartesianGrid
            stroke="#F5F5F5"
        /> 
        <Bar
            dataKey="レベル"
            barSize={20}
            stroke="rgba(34, 80, 162, 0.2)"
            fillOpacity={1}
            fill="#2250A2"
        />
        </ComposedChart>
        </div>
        <div className={classes.experience}>
          経験年数:{props.experience}
        </div>
      </div>
    );
}

export default Graph;