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
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Час (Години)',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Кількість повідомлень',
                },
            },
        },
    };

    const chartData = {
        labels: Array.from({ length: 24 }, (_, i) => `${i}:00`), 
        datasets: [
            {
                label: 'Отриманні повідомлення',
                data: data, 
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                tension: 0.4,
            },
        ],
    };

    return (
        <div className="chart">
            <Line options={options} data={chartData} />
        </div>
    );
};
