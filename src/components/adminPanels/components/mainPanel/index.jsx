import React from "react";
import { AdminHeader } from "./components/adminHeader";

import { Dashboard } from "./components/dashboard";
import { AccountPanel } from "./components/account";
import { ViewPanel } from "./components/describe/index";
import { CabinetPanel } from "./components/cabinet";

export const MainPanel = ({ selectedPanel, selectedComplaint, onPanelChange }) => { 

    const renderContent = () => {
        switch (selectedPanel) {
            case "#Dashboard":
                return <Dashboard/>;
            case "#AddCase":
                return <ViewPanel  onPanelChange={onPanelChange}/>;
            case "#Cabinet":
                return <CabinetPanel selectedComplaint={selectedComplaint}/>;
            case "#Account":
                return <AccountPanel progressValue={70}/>;
            default:
                return <div style={{color: 'black'}}>Welcome to Admin Panel</div>;
        }
    };

    return (
        <main className="mainPanel">
            <AdminHeader />
            <div className="container">
                {renderContent()}
            </div>
        </main>
    );
};
