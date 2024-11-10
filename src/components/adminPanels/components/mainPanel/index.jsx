import React from "react";
import { AdminHeader } from "./components/adminHeader";

import { Dashboard } from "./components/dashboard";

export const MainPanel = ({ selectedPanel }) => { 

    const renderContent = () => {
        switch (selectedPanel) {
            case "#Dashboard":
                return <Dashboard/>;
            case "#AddCase":
                return <div style={{color: 'black'}}>Add Case Content</div>;
            case "#Cabinet":
                return <div style={{color: 'black'}}>Cabinet Content</div>;
            case "#Account":
                return <div style={{color: 'black'}}>User Account Content</div>;
            default:
                return <div style={{color: 'black'}}>Welcome to Admin Panel</div>;
        }
    };

    return (
        <main className="mainPanel">
            <AdminHeader />
            {renderContent()}
        </main>
    );
};
