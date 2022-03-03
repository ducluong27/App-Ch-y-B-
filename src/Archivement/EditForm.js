import React, { useState,useEffect } from 'react';
import {LabelStyle,ButtonSave,ButtonCancel,ReturnButton  } from './RecentArchievementStyle';
export default function EditForm(dataToEdit) {
    // const [items, setItems] = useState([]);
    // useEffect(() => {
    //   const items = JSON.parse(localStorage.getItem('allArchievement'));
    //   if (items) {
    //    setItems(items);
    //   }
    // }, []);
    const getLocal =()=>{
        let list=localStorage.getItem('allArchievement');
        if (list){
            return JSON.parse(list);
        }
        else return [];
    }
    const data=dataToEdit.dataToEdit;
    const [items,setItems]=useState(getLocal())
    const [dataEdit,setDataEdit]=useState({distance:data.distance,totalTime:data.totalTime,date:data.date,start:data.start,end:data.end,comment:data.comment,height:data.height,weight:data.weight,imageLink:data.imageLink});
    const handleEdit=()=>{
        items.map((item)=>{
            if(item.id===data.id){
                item.distance=dataEdit.distance;
                item.totalTime=dataEdit.totalTime;
                item.date=dataEdit.date;
                item.imageLink=dataEdit.imageLink;
                item.start=dataEdit.start;
                item.end=dataEdit.end;
                item.comment=dataEdit.comment;
                item.weight=dataEdit.weight;
                item.height=dataEdit.height;
                return item;
            }
            return items;
        })
    }
    console.log(items);
    useEffect(()=>{
        localStorage.setItem('allArchievement',JSON.stringify(items));
    });
    return (
        <div className='container'>
            <form>
                <div className='row'>
                    <div className='col-md-5 col-xs-12'>
                        <LabelStyle className='float-left mt-4'> Quãng Đường </LabelStyle>
                        <input type="text"className="form-control" defaultValue={data.distance} style={{fontSize:"20px",fontWeight:'500'}} onChange={(e)=>setDataEdit({ ...dataEdit,distance:e.target.value})}/>
                        <LabelStyle className='float-left mt-4'> Thời Gian Chạy </LabelStyle>
                        <input type="text"className="form-control" defaultValue={data.totalTime} style={{fontSize:"20px",fontWeight:'500'}} onChange={(e)=>setDataEdit({ ...dataEdit,totalTime:e.target.value})}/>
                        <LabelStyle className='float-left mt-4'> Ngày Chạy </LabelStyle>
                        <input type="text"className="form-control" defaultValue={data.date} style={{fontSize:"20px",fontWeight:'500'}}onChange={(e)=>setDataEdit({ ...dataEdit,date:e.target.value})}/>
                    </div>
                    <div className='col-2'></div>
                    <div className='col-md-5 col-xs-12'>
                        <LabelStyle className='float-left mt-4'> Địa Điểm Bắt Đầu </LabelStyle>
                        <input type="text"className="form-control" defaultValue={data.start} style={{fontSize:"20px",fontWeight:'500'}} onChange={(e)=>setDataEdit({ ...dataEdit,start:e.target.value})}/>
                        <LabelStyle className='float-left mt-4'> Địa Điểm Kết Thúc </LabelStyle>
                        <input type="text"className="form-control" defaultValue={data.end} style={{fontSize:"20px",fontWeight:'500'}} onChange={(e)=>setDataEdit({ ...dataEdit,end:e.target.value})}/>
                        <LabelStyle className='float-left mt-4'> Mô Tả </LabelStyle>
                        <input type="text"className="form-control" defaultValue={data.comment} style={{fontSize:"20px",fontWeight:'500'}} onChange={(e)=>setDataEdit({ ...dataEdit,comment:e.target.value})}/>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col-12'>
                        <LabelStyle className='float-left'> Link Ảnh </LabelStyle>
                        <input type="text"className="form-control" defaultValue={data.imageLink} style={{fontSize:"20px",fontWeight:'500'}} onChange={(e)=>setDataEdit({ ...dataEdit,imageLink:e.target.value})}/>
                        <ButtonSave href="/thanh-tich" className='btn btn-outline-info form-control mt-4' onClick={handleEdit()}><i className="fas fa-save"> </i> Lưu Lại</ButtonSave>
                        <ButtonCancel type="reset" className='btn btn-outline-warning form-control mt-4'><i className="fa fa-remove"></i> Hủy</ButtonCancel>
                        <ReturnButton href='/thanh-tich' className='btn btn-outline-primary form-control mt-4 mb-3'><i className="fa fa-undo"></i> Trở Về</ReturnButton>
                    </div>      
                </div>
            </form>
        </div>
    );
}
