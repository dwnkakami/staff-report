import * as React from 'react';
import { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import {ComposedChart, XAxis, YAxis, Tooltip, CartesianGrid, Bar} from 'recharts';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: '100%',
    height: '80%',
    borderRadius: '0px 0px 0px 0px'
  },
  Graph: {
    flexGrow: 1,
    float: 'left',
    width: '400px',
    display:'center',
    margin:'40px 0px 0px 120px'
  },
  Graph2: {
    flexGrow: 2,
    float: 'right',
    width: '400px',
    display:'center',
    margin:'40px 120px 0px 0px'
  },
  experience: {
    color: '#000000',
  },
}));


// const Tooltip = () => {
//   return(
//     <div>
      
//     </div>
//   )
// }

const Graph = (props) =>  {
    const [chartData, setChartData] = useState([]);
    const [chartData2, setChartData2] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        setChartData(data_level);
        setChartData2(data_assessment);
    },[]);

    const data_level = [
      { name: `${props.skillname}`, "レベル": `${props.level}`,"経験年数":`${props.experience}`},
  ];
    const data_assessment= [
      { name: `自己評価`,"レベル":`${props.assessment}`},
  ];

    return (
        <div>

        <Paper className={classes.paper}>
          <div className={classes.Graph}>
        <ComposedChart
            width={400}
          height={280}
            layout="vertical"
            data={chartData}
            margin={{ top: 20, right: 0, bottom: 0, left: 10 }}
        >
        <XAxis  
            type="number"
            domain={[0, 'Max 10']}
            ticks={[0,2,4,6,8,10]}  />
        <YAxis
            type="category"
            dataKey="name"
            dataKey2="経験年数"
        />
        <Tooltip/>
        <CartesianGrid
            stroke="#f5f5f5"
            dataKey="name"
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
            ticks={[0,2,4,6,8,10]} 
        />
        <YAxis
            type="category"
            dataKey="name"
        />
        <Tooltip/>
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
        </div>
      </Paper>

      </div>
    );
}

export default Graph;
