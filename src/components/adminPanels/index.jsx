import React, { useState } from "react";
import { SideBar } from "./components/sidebar/index";
import { MainPanel } from "./components/mainPanel/index";

export const AdminPanels = () => {
    const [selectedPanel, setSelectedPanel] = useState("#Dashboard"); 
    const [selectedComplaint, setSelectedComplaint] = useState(null);
    const handlePanelChange = (panel, complaint) => {
        setSelectedPanel(panel);
        setSelectedComplaint(complaint);
    };

    return (
        <div className="admin-panels-container">
            <SideBar onSelectPanel={setSelectedPanel} /> 
            <MainPanel 
                selectedPanel={selectedPanel} 
                selectedComplaint={selectedComplaint} 
                onPanelChange={handlePanelChange} 
            /> 
        </div>
    );
};
