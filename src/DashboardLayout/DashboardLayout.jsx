import React from 'react';
import { Outlet } from 'react-router';

const DashboardLayout = () => {
    return (
        <div>
            this is dashboard
            <Outlet></Outlet>
        </div>
    );
};

export default DashboardLayout;