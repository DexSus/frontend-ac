import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const Top5BarChart = ({ labels, data }) => {
    const chartData = {
        labels: labels, 
        datasets: [
            {
                label: 'Скарг про організацію: ',
                data: data, 
                backgroundColor: 'rgba(255, 235, 205, 0.8)', 
                borderColor: '#d4b483',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { display: false },
            title: {
                display: true,
                text: 'Кількість пов`язаних скарг:',
                color: '#4a3b31',
                font: {
                    family: "'UAF Sans', sans-serif",
                    size: 18,
                },
            },
        },
        scales: {
            x: {
                ticks: { 
                    color: '#4a3b31',
                    font: {
                        family: "'UAF Sans', sans-serif",
                    },
                },
            },
            y: {
                beginAtZero: true,
                ticks: { 
                    color: '#4a3b31',
                    font: {
                        family: "'UAF Sans', sans-serif",
                    },
                },
            },
        },
    };

    return (
        <div className="bar-chart">
            <Bar data={chartData} options={options} />
        </div>
    );
};
