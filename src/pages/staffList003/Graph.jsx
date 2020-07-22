import * as React from 'react';
import StaffList003_Button from './StaffList003_Button';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Graph003 = () => {
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
     <StaffList003_Button
     key={data.staffnamber}
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

export default Graph003;