import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";



export default function WeightChart(items) {
    const LocalData=items.items;
    const data = {
    labels: LocalData.map((item)=>item.date),
    datasets: [
      {
        label: "Cân Nặng",
        data: LocalData.map((item) => item.weight),
        fill: true,
        backgroundColor: "rgba(102, 51, 153,0.3)",
        borderColor: "#742774"
      },
      
    ]
    
    };
    let options = {
        scales: {
            y: {
                max:100,
                min: 30,
                labelString:"hih",
                ticks: {
                    stepSize: 10,
                },
            }
        }
    };
    return (
        <div className="container mt-2 pb-4">
        
            <Line data={data} options={options}/>
            <h2 className="mt-2">Sự Thay Đổi Cân Nặng</h2>
        </div>
    );
}

