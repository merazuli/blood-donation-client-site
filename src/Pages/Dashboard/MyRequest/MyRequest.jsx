import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import useAxiosSecure from '../AddRequests/Hooks/useAxiosSecure';


const MyRequest = () => {
    const [requests, setRequests] = useState([]);
    const [totalRequest, setTotalRequest] = useState(0)
    const [itemPerPage, setItemPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1)
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    // console.log(requests)


    useEffect(() => {
        axiosSecure.get(`/my-requests?page=${currentPage - 1}&size=${itemPerPage}`)
            .then(res => {
                console.log(res.data)
                setRequests(res.data.request)
                setTotalRequest(res.data.totalRequest)
            })
            .catch(err => {
                console.log(err)
            })

    }, [axiosSecure, currentPage, itemPerPage])

    const numberOfPages = Math.ceil(totalRequest / itemPerPage);
    const pages = [...Array(numberOfPages).keys().map(e => e + 1)];

    console.log(pages)

    // console.log(totalRequest, requests)



    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Recipient Name</th>
                            <th>Hospital Name</th>
                            <th>Blood Group</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            requests?.map((request, index) => <tr key={request._id}>
                                <th>{index + 1}</th>
                                <td>{request?.recipientName}</td>
                                <td>{request?.hospitalName}</td>
                                <td>{request?.bloodGroup}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            Prev 1 2 3 4 Next
        </div>
    );
};

export default MyRequest;