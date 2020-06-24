import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import StaffList005 from './StaffList005';
import StaffList005_figure from './StaffList005_figure';

const S_005 = () => {
    const [staff, setStaff] = useState([]);

    useEffect(() => getData());

    const getData = () => {
        // if(staff.length === 0){
            axios
                .get('/api/stafflist005')
                .then(response => {
                    console.log([response.data]);
                    // setStaff(response.data);
                })
                .catch(() => {
                    console.log('connected error');
                })
    }
    return (
        <div className="S_005">
            {staff.map((data) => (
            <StaffList005_figure key={data.id} 
            contents={data.name} />  
            ))}
        </div>
    );
}
export default S_005;