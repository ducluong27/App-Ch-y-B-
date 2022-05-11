import React, { useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";



export default function DayChart(items) {
    const [temp,setTemp]=useState();
    const [year,setYear]=useState(2022);
    const [month,setMonth]=useState("01");
    const LocalData=items.items;
    let Years=[];
    // console.log(Month);
    for (let index = 1; index < LocalData.length; index++) {
        const date=new Date(LocalData[index].date)
        Years.push(date.getFullYear())
        
    }
    let resultYears = [];
    resultYears = Years.filter(function(element){
        return resultYears.includes(element) ? '' : resultYears.push(element)
    });
    const tempDistance=[0];
    const tempTotalTime=[0];
    const tempDay=[0];
    const handleDay=(tempYear,tempMonth)=>{
        for (let index = 0; index < LocalData.length; index++) {
            const date=new Date(LocalData[index].date)
            if(Number(tempYear)===date.getFullYear()){
                if(LocalData[index].date[5]===tempMonth[0]&&LocalData[index].date[6]===tempMonth[1]){
                    tempDay.push(LocalData[index].date);
                    tempDistance.push(LocalData[index].distance)
                    tempTotalTime.push(LocalData[index].totalTime)
                }
            }
        }
    }
    handleDay(year,month);
    // tempDay.push("31-12-"+tempYear);
    // console.log(tempDay);
    const data1 = {
    labels: tempDay.map((item)=>item),
    datasets: [
      {
        label: "Quãng Đường",
        data: tempDistance.map((item) => item),
        fill: true,
        backgroundColor: "rgba(102, 51, 153,0.3)",
        borderColor: "#742774"
      },
      
    ]
    };
    const data2 = {
    labels: tempDay.map((item)=>item),
    datasets: [
      {
        label: "Tổng Thời Gian Chạy",
        data: tempTotalTime.map((item) => item),
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
      
    ]
    };
    let options1 = {
        scales: {
            y: {
                max:40,
                min: 0,
                ticks: {
                    stepSize: 5,
                },
            }
        }
    };
    let options2 = {
        scales: {
            y: {
                max:150,
                min: 0,
                ticks: {
                    stepSize: 15,
                },
            }
        }
    };
    const handleChart=()=>{
        if(temp==='false'){
            return (
                <>
                    <Line data={data2} options={options2}/>
                    <h2 className="mt-3">Biểu Đồ Thời Gian Chạy Hằng Ngày</h2>
                </>

            )
        }
        else return (
            <>
                <Line data={data1} options={options1}/>
                <h2 className="mt-3">Biểu Đồ quãng đường Chạy Hằng Ngày</h2>
            </>   
        )
    }
    return (
        <div className="container pt-2 pb-4">
            <div className="row">
                <div className="form-group col-8">
                    <label className="float-left">Chọn Năm</label>
                    <select className="custom-select" onChange={(e)=>setYear(e.target.value)}>
                    {
                        resultYears.map((item,key)=>{
                            return (
                                <option key={key} value={item}>{item}</option>
                            )
                        })
                    }
                    </select>
                </div>
                <div className="form-group col-9">
                    <label className="float-left">Chọn Tháng</label>
                    <select className="custom-select" onChange={(e)=>setMonth(e.target.value)}>
                        <option value="01">Tháng 1</option>
                        <option value="02">Tháng 2</option>
                        <option value="03">Tháng 3</option>
                        <option value="04">Tháng 4</option>
                        <option value="05">Tháng 5</option>
                        <option value="06">Tháng 6</option>
                        <option value="07">Tháng 7</option>
                        <option value='08'>Tháng 8</option>
                        <option value="09">Tháng 9</option>
                        <option value="10">Tháng 10</option>
                        <option value="11">Tháng 11</option>
                        <option value="12">Tháng 12</option>
                    </select>
                </div>
                <div className="col-10">
                    <div className="form-group">
                        <label className="float-left">Chọn biểu đồ thành tích</label>
                        <select className="custom-select" onChange={(e)=>setTemp(e.target.value)}>
                            <option value={true}>Quãng Đường</option>
                            <option value={false}>Thời Gian Chạy</option>    
                        </select>
                    </div>
                </div>
            </div>
            
            
            {handleChart()}
        </div>
    );
}

