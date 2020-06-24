import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import StaffList005 from './StaffList005';

const S_005 = () => {
    const [user, setUser] = useState([]);

    useEffect(() => getData());

    const getData = () => {
        if(user.length === 0){
            axios
                .get('/api/stafflist005')
                .then(response => {
                    setUser(response.data);
                })
                .catch(() => {
                    console.log('connected error');
                })
    }}
    return (
        <div className="S_005">
            {user.map((data) => (
            <StaffList005 key={data.id} 
            contents={data.name} />  
            ))}
        </div>
    );
}
export default S_005;