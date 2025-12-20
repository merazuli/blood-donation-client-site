import React, { useContext, useEffect, useState } from 'react';
import useAxios from '../AddRequests/Hooks/useAxios';
import { AuthContext } from '../../../provider/AuthProvider';

const MyRequest = () => {
    const [requests, setRequests] = useState([]);
    const axiosInstance = useAxios();
    const { user } = useContext(AuthContext);

    // console.log(requests)


    useEffect(() => {
        axiosInstance.get(`/admin/requests/${user?.email}`)
            .then(res => {
                setRequests(res.data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [axiosInstance, user?.email])

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL:</th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            requests.map((request, index) => <tr key={request._id}>
                                <th>{index + 1}</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyRequest;