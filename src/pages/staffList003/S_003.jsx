import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import StaffList003_figure from './StaffList003_figure';

const S_003 = () => {
    const [user, setUser] = useState([]);

    useEffect(() => getData());

    const getData = () => {
        if(user.length === 0){
            axios
                .get('/api/stafflist003/2')
                .then(response => {
                    setUser(response.data);
                })
                .catch(() => {
                    console.log('connected error');
                })
    }}
    return (
        <div className="S_003">
            {user.map((data) => (
            <StaffList003_figure key={data.経歴番号} 
            contents={data.スタッフ番号}
            name={data.案件名}
             />
        
            ))}
        </div>
    );
}
export default S_003;
