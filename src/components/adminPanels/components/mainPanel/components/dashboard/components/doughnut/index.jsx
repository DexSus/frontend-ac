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
                backgroundColor: ["#E4CDA7", "#D6A676", "#A3795B"], 
                hoverBackgroundColor: ["#E4CDA7AA", "#D6A676AA", "#A3795BAA"], 
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
                labels: {
                    font: {
                        family: 'UAF Sans', 
                        size: 14,
                    },
                },
            },
            tooltip: {
                enabled: true,
                bodyFont: {
                    family: 'UAF Sans', 
                },
            },
        },
        animation: {
            animateScale: true,
            animateRotate: true,
        },
        elements: {
            arc: {
                borderWidth: 2,
            },
        },
    };

    return (

        <div className="diagram">
            <Doughnut data={data} options={options} />
        </div>
    );
};
