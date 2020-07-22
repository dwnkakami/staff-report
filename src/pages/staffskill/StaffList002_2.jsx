import * as React from 'react';
import StaffList002_graph from './StaffList002_graph';
import { useState, useEffect } from 'react';
import axios from 'axios';
const StaffList002_2 = () => {
const [user, setUser] = useState([]);
useEffect(() => getData());
// const classes = useStyles();
const getData = () => {
    if(user.length === 0){
        axios
            .get(`/api/stafflist002/2`)
            .then(response => {
                setUser(response.data);
            })
            .catch(() => {
                console.log('connected error');
            })
}}
return(
    <div>
 {user.map((data) => (
     <StaffList002_graph
     key={data.staffnamber}
     staffnamber={data.staffnamber}
     level={data.level}
     skillname={data.skillname}
     assessment={data.assessment}
     />
 ))}
 </div>
);
}
export default StaffList002_2;