import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";



export default function HeightChart(items) {
    const LocalData=items.items;
    const data = {
    labels: LocalData.map((item)=>item.date),
    datasets: [
      {
        label: "Chiều cao",
        data: LocalData.map((item) => item.height),
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
      
    ]
    
    };
    let options = {
        scales: {
            y: {
                max:200,
                min: 100,
                ticks: {
                    stepSize: 10,
                },
            },
        }
    };
    return (
        <div className="container mt-2 pb-4">
            <Line data={data} options={options}/>
            <h2 className="pb-2">Sự Thay Đổi Chiều Cao</h2>
        </div>
    );
}

