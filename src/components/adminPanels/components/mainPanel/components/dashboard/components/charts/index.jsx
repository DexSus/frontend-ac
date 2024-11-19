import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const MessagesChart = ({ data }) => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Статистика надходження повідомлень',
                font: {
                    family: 'UAF Sans', 
                },
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Час (Години)',
                    font: {
                        family: 'UAF Sans', 
                    },
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Кількість повідомлень',
                    font: {
                        family: 'UAF Sans', 
                    },
                },
            },
        },
    };

    const chartData = {
        labels: Array.from({ length: 24 }, (_, i) => `${i}:00`), 
        datasets: [
            {
                label: 'Отримані повідомлення',
                data: data, 
                borderColor: '#A3795B', 
                backgroundColor: 'rgba(163, 121, 91, 0.2)', 
                tension: 0.4,
                font: {
                    family: 'UAF Sans', 
                },
            },
        ],
    };

    return (
        <div className="chart">
            <Line options={options} data={chartData} />
        </div>
    );
};
