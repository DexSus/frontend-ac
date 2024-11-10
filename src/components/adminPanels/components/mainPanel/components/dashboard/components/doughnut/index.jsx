import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export const SourcesDoughnutChart = () => {
    const data = {
        labels: ["Telegram", "WhatsApp", "Форма з сайту"],
        datasets: [
            {
                label: "Отримано повідомлень",
                data: [17, 4, 33], 
                backgroundColor: ["#36A2EB", "#4BC0C0", "#FF6384"],
                hoverBackgroundColor: ["#36A2EB90", "#4BC0C090", "#FF638490"],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            tooltip: {
                enabled: true,
            },
        },
        animation: {
            animateScale: true,
            animateRotate: true, 
        },
    };

    return (

        <div className="diagram">
            <Doughnut data={data} options={options} />
        </div>
    );
};
