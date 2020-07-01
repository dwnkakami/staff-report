import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import StaffList005_figure from './StaffList005_figure';

const S_005 = () => {
    const [staff, setStaff] = useState([]);

    useEffect(() => getData());

    const getData = () => {
        if(staff.length === 0){
            axios
                .get('localhost:4000/api/stafflist005/:condition')
                .then(response => {
                    setStaff(response.data);
                })
                .catch(() => {
                    console.log('connected error');
                })
    }}
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

// import React from 'react';
// import {getData} from './sample';
// import StaffList005_figure from './StaffList005_figure';

// const current_data = getData.filter((sample) => {
//     return sample.id　=== 1});

// const S_005 = () => {

//     return(
//         <div className="S_005">
//           {current_data.map((sample) => (
//                 <StaffList005_figure key={sample.id} 
//                 contentsname={sample.name}/>
//             ))}
//         </div>
//             )
//         }

// export default S_005;