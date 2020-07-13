import React, {useState} from 'react';
import axios from 'axios';

const Sample = () => {
    const [userId,setUserId] = useState("");
    const [name,setName] = useState("");
    const [role,setRole] = useState("");

    const handleChange = e => {
        switch (e.target.name) {
            case 'userId':
                setUserId(e.target.value);
                break;
            case 'name':
                setName(e.target.value);
                break;
            case 'role':
                setRole(e.target.value);
                break;
            default:
                console.log('text not found');
        }
    };

    const submit = () => {
        const newValue = [];

        newValue.push(
            {"id":userId, "name":name, "role_id":role}
        );

        axios
            .post('/api/sample',newValue)
            .then(response => {
                console.log(response.data);
            })
            .catch(() => {
                console.log('submit error');
            })
    };

    return (
        <div>
            <input type="text" name="userId" value={userId} onChange={handleChange} />
            <input type="text" name="name" value={name} onChange={handleChange} />
            <input type="text" name="role" value={role} onChange={handleChange} />
            <button onClick={submit}>登録</button>
            {userId}
            {name}
            {role}
        </div>
    );
};

export default Sample;