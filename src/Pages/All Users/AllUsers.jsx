import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../Dashboard/AddRequests/Hooks/useAxiosSecure';
import { AuthContext } from '../../provider/AuthProvider';

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const [users, setUsers] = useState([]);
    const { user } = useContext(AuthContext)


    useEffect(() => {
        if (!user) return;
        axiosSecure.get('/users')
            .then(res => {
                setUsers(res.data)
            })
    }, [axiosSecure, user])
    console.log(users)
    return (
        <div>
            All users
        </div>
    );
};

export default AllUsers;