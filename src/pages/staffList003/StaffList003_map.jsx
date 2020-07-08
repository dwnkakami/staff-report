import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import StaffList003_figure from './StaffList003_figure';

const StaffList003_map = () => {
    const [user, setUser] = useState([]);  
  
    useEffect(() => getData());
  
    const getData = () => {
      if(user.length === 0){
          axios
              .get('/api/stafflist003/4')
              .then(response => {
                  setUser(response.data);
              })
              .catch(() => {
                  console.log('connected error');
              })
  }}
  return (
    <div>
      {user.map((data) => (
      <div key={data.スタッフ番号}>
      {data.案件名 ? <StaffList003_figure/>:"データなし"}
      </div>
      ))}
    </div>
  );
}

export default StaffList003_map;