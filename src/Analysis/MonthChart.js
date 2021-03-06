import React,{useState} from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";



export default function MonthChart(items) {
    const LocalData=items.items;
    const [year,setYear]=useState(2022);
    const [temp,setTemp]=useState();
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
    let tempSumDistance=[0,0,0,0,0,0,0,0,0,0,0,0];
    let tempSumTotalTime=[0,0,0,0,0,0,0,0,0,0,0,0];
    const handleMonth=(tempYear)=>{
        for (let index = 0; index < LocalData.length; index++) {
            const date=new Date(LocalData[index].date)
            if(Number(tempYear)===date.getFullYear()){
                if(LocalData[index].date[5]==="0" && LocalData[index].date[6]==="1"){
                    tempSumDistance[0]=tempSumDistance[0]+Number(LocalData[index].distance)
                    tempSumTotalTime[0]=tempSumTotalTime[0]+Number(LocalData[index].totalTime)
                }
                else if(LocalData[index].date[5]==="0" && LocalData[index].date[6]==="2"){
                    tempSumDistance[1]=tempSumDistance[1]+Number(LocalData[index].distance)
                    tempSumTotalTime[1]=tempSumTotalTime[1]+Number(LocalData[index].totalTime)
                }
                else if(LocalData[index].date[5]==="0" && LocalData[index].date[6]==="3"){
                    tempSumDistance[2]=tempSumDistance[2]+Number(LocalData[index].distance)
                    tempSumTotalTime[2]=tempSumTotalTime[2]+Number(LocalData[index].totalTime)
                }
                else if(LocalData[index].date[5]==="0" && LocalData[index].date[6]==="4"){
                    tempSumDistance[3]=tempSumDistance[3]+Number(LocalData[index].distance)
                    tempSumTotalTime[3]=tempSumTotalTime[3]+Number(LocalData[index].totalTime)
                }
                else if(LocalData[index].date[5]==="0" && LocalData[index].date[6]==="5"){
                    tempSumDistance[4]=tempSumDistance[4]+Number(LocalData[index].distance)
                    tempSumTotalTime[4]=tempSumTotalTime[4]+Number(LocalData[index].totalTime)
                }
                else if(LocalData[index].date[5]==="0" && LocalData[index].date[6]==="6"){
                    tempSumDistance[5]=tempSumDistance[5]+Number(LocalData[index].distance)
                    tempSumTotalTime[5]=tempSumTotalTime[5]+Number(LocalData[index].totalTime)
                }
                else if(LocalData[index].date[5]==="0" && LocalData[index].date[6]==="7"){
                    tempSumDistance[6]=tempSumDistance[6]+Number(LocalData[index].distance)
                    tempSumTotalTime[6]=tempSumTotalTime[6]+Number(LocalData[index].totalTime)
                }
                else if(LocalData[index].date[5]==="0" && LocalData[index].date[6]==="8"){
                    tempSumDistance[7]=tempSumDistance[7]+Number(LocalData[index].distance)
                    tempSumTotalTime[7]=tempSumTotalTime[7]+Number(LocalData[index].totalTime)
                }
                else if(LocalData[index].date[5]==="0" && LocalData[index].date[6]==="9"){
                    tempSumDistance[8]=tempSumDistance[8]+Number(LocalData[index].distance)
                    tempSumTotalTime[8]=tempSumTotalTime[8]+Number(LocalData[index].totalTime)
                }
                else if(LocalData[index].date[5]==="1" && LocalData[index].date[6]==="0"){
                    tempSumDistance[9]=tempSumDistance[9]+Number(LocalData[index].distance)
                    tempSumTotalTime[9]=tempSumTotalTime[9]+Number(LocalData[index].totalTime)
                }
                else if(LocalData[index].date[5]==="1" && LocalData[index].date[6]==="1"){
                    tempSumDistance[10]=tempSumDistance[10]+Number(LocalData[index].distance)
                    tempSumTotalTime[10]=tempSumTotalTime[10]+Number(LocalData[index].totalTime)
                }
                else {
                    tempSumDistance[11]=tempSumDistance[11]+Number(LocalData[index].distance)
                    tempSumTotalTime[11]=tempSumTotalTime[11]+Number(LocalData[index].totalTime)
                }
            }
        }
    }
    handleMonth(year)
    const Month=["Th??ng 1","Th??ng 2","Th??ng 3","Th??ng 4","Th??ng 5","Th??ng 6","Th??ng 7","Th??ng 8","Th??ng 9","Th??ng 10","Th??ng 11","Th??ng 12"]
    const data1 = {
        labels: Month.map((item)=>item),
        datasets: [
          {
            label: "Qu??ng ???????ng",
            data: tempSumDistance.map((item) => item),
            fill: true,
            backgroundColor: "rgba(102, 51, 153,0.3)",
            borderColor: "#742774"
          },
          
        ]
    };
    const data2 = {
        labels: Month.map((item)=>item),
        datasets: [
          {
            label: "T???ng Th???i Gian Ch???y",
            data: tempSumTotalTime.map((item) => item),
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
                    <h2 className="mt-3">Bi???u ????? Th???i Gian Ch???y H???ng Th??ng</h2>
                </>

            )
        }
        else return (
            <>
                <Line data={data1} options={options1}/>
                <h2 className="mt-3">Bi???u ????? qu??ng ???????ng Ch???y H???ng Th??ng</h2>
            </>   
        )
    }
    // const date=new Date(LocalData[0].date);
    // console.log(date.getMonth()+1);
    // console.log(LocalData);
    // const data1 = {
    // labels: LocalData.map((item)=>item.date),
    // datasets: [
    //   {
    //     label: "Qu??ng ???????ng",
    //     data: LocalData.map((item) => item.distance),
    //     fill: true,
    //     backgroundColor: "rgba(102, 51, 153,0.3)",
    //     borderColor: "#742774"
    //   },
      
    // ]
    // };
    // const data2 = {
    // labels: LocalData.map((item)=>item.date),
    // datasets: [
    //   {
    //     label: "T???ng Th???i Gian Ch???y",
    //     data: LocalData.map((item) => item.totalTime),
    //     fill: true,
    //     backgroundColor: "rgba(75,192,192,0.2)",
    //     borderColor: "rgba(75,192,192,1)",
    //   },
      
    // ]
    // };
    // let options1 = {
    //     scales: {
    //         y: {
    //             max:40,
    //             min: 0,
    //             ticks: {
    //                 stepSize: 5,
    //             },
    //         }
    //     }
    // };
    // let options2 = {
    //     scales: {
    //         y: {
    //             max:150,
    //             min: 0,
    //             ticks: {
    //                 stepSize: 15,
    //             },
    //         }
    //     }
    // };
    return (
        <div className="container pt-2 pb-4">
            <div className="row">
                <div className="form-group col-8">
                    <label className="float-left">Ch???n N??m</label>
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
                    <label className="float-left">Ch???n bi???u ????? th??nh t??ch</label>
                    <select className="custom-select" onChange={(e)=>setTemp(e.target.value)}>
                        <option value={true}>Qu??ng ???????ng</option>
                        <option value={false}>Th???i Gian Ch???y</option>    
                    </select>
                </div>
            </div>
            {handleChart()}
        </div>
    );
}

