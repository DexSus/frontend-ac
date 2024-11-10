import React from "react";

import { DashboardCard } from './components/card/index';
import { MessagesChart } from "./components/charts/index";
import { SourcesDoughnutChart } from "./components/doughnut/index";

export const Dashboard = () => {

    const hourlyMessages = [1, 3, 4, 2, 3, 5, 4, 1, 3, 7, 5, 6, 2, 2, 7, 2, 1, 1, 1, 2];


    return (
        <div className="dashboard-container">
            <div className="dashboard-preview">
                <p>Dashboard</p>
                <h1>Інформація про повідомлення</h1>
            </div>
            <div className="dashboard-cards-container">
                <DashboardCard title={"За останній місяць"} count={2504} type={"last-month"}/>
                <DashboardCard title={"За останній день"} count={82} type={"last-day"}/>
                <DashboardCard title={"За сьогодні"} count={54} type={"now"}/>
                <DashboardCard title={"Закриті"} count={1576} type={"closed"}/>
                <DashboardCard title={"Необроблені"} count={25} type={"un-read"}/>
            </div>
            <div className="dashboard-charts-container">
                <MessagesChart data={hourlyMessages} />
                <SourcesDoughnutChart/>
            </div>
        </div>
    );
};
