import * as React from 'react';
import StaffList002_graph from './StaffList002_graph';
import { useState, useEffect } from 'react';
import axios from 'axios';

const StaffList002_2 = (props) => {
const [user, setUser] = useState([]);

useEffect(() => getData());

const getData = () => {
    if(user.length === 0){
        axios
            .get(`/api/stafflist002/${props.id}`)
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
     key={data.staff_id}
     staffnamber={data.staffnamber}
     level={data.level}
     skillname={data.skillname}
     assessment={data.assessment}
     experience={data.experience}
     />
 ))}
 </div>
);
}
export default StaffList002_2;