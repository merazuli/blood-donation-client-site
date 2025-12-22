import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='max-w-5xl mx-auto'>
            <div className='flex justify-center items-center mt-30'>
                <img src="https://i.ibb.co.com/DD3ywm7Z/error-404.png" alt="" />

            </div>
            <Link to='/' className='btn mx-auto btn-primary text-center'>Back To Home</Link>
        </div>
    );
};

export default Error;