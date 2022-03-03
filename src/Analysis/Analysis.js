import React,{useState} from "react";
import HeightChart from "./HeightChart";
import WeightChart from "./WeightChart";
import DayChart from "./DayChart";
import { BackgroundAnalysis } from "./AnalysisStyle";
import MonthChart from "./MonthChart";



export default function Analysis() {
  const getLocal =()=>{
    let list=localStorage.getItem('allArchievement');
    if (list){
        return JSON.parse(list);
    }
    else return [];
  }
  const [items, setItems] = useState(getLocal());
  const [status,setStatus]=useState();
  const handleChart=()=>{
    if(status==="2"){
      return <HeightChart items={items}/>
    }
    else if(status==="3"){
      return <DayChart items={items}/>
    }
    else if(status==="4"){
      return <MonthChart items={items}/>
    }
    else return <WeightChart items={items}/>
  }
  return (
    <BackgroundAnalysis>
    <div className="container">
      <h1 className="pt-3">Biểu Đồ Sự Thay Đổi Thành Tích</h1>
      <div className="row">
        <div className="col-7">
          <div className="form-group ml-3">
            <label className="float-left">Chọn biểu đồ</label>
            <select className="custom-select" onChange={(e)=>setStatus(e.target.value)}>
                <option value="1">Cân Nặng</option>
                <option value="2">Chiều Cao</option>    
                <option value="3">Thành Tích Hằng Ngày</option>    
                <option value="4">Thành Tích Hằng Tháng</option>    
            </select>
          </div>
        </div>
      </div>
      {/* <HeightChart items={items}/> */}
      {/* <WeightChart items={items}/> */}
      {/* <DayChart items={items}/> */}
      {/* <MonthChart items={items}/> */}
      {handleChart()}
    </div>
    </BackgroundAnalysis>
  );
}

