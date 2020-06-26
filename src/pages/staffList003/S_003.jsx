// import React, { useState } from 'react';
// import axios from 'axios';
// import { useEffect } from 'react';
// // import StaffList003_figure from './StaffList003_figure';
// import StaffList003 from './StaffList003';

// const S_003 = () => {
//     const [user, setUser] = useState([]);

//     useEffect(() => getData());

//     const getData = () => {
//         if(user.length === 0){
//             axios
//                 .get('/api/stafflist003')
//                 .then(response => {
//                     setUser(response.data);
//                 })
//                 .catch(() => {
//                     console.log('connected error');
//                 })
//     }}
//     return (
//         <div className="S_003">
//             {user.map((data) => (
//             <StaffList003 key={data.経歴番号} 
//             contents={data.スタッフ番号}
//             name={data.案件名}
//              />
        
//             ))}
//         </div>
//     );
// }
// export default S_003;

import React from 'react';
import { getData } from './Sample_003';
import StaffList003_figure from './StaffList003_figure';

const current_data = getData.filter((data) => {
    return data.id === 1;
});

const S_003 = () => {

    return(
        <div className="S_005">
          {current_data.map((data) => (
                <StaffList003_figure key={data.id} 
                name={data.name}/>
            ))}
        </div>
            )
        }

export default S_003;