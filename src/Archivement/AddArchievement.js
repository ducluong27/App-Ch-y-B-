import React, { useEffect, useState } from 'react'
import {Title,BackgroundAddArchievement,NoteStyle,InputForm,ReturnButton, ButtonAdd } from './RecentArchievementStyle';
import { v4 as uuidv4 } from 'uuid';
export default function AddArchievement() {
    const getLocal =()=>{
        let list=localStorage.getItem('allArchievement');
        if (list){
            return JSON.parse(list);
        }
        else return [];
    }
    const [archievement,setArchievement]=useState({id:uuidv4(),distance:"",totalTime:"",date:"",start:"",end:"",comment:"",
    height:"",weight:"",imageLink:""});
    const [allArchievement,setAllArchievement]=useState(getLocal());
    const handleAddArchievement=()=>{
        setAllArchievement([...allArchievement,archievement]);
        setArchievement({id:uuidv4(),distance:"",totalTime:"",date:"",start:"",end:"",comment:"",height:"",weight:"",imageLink:""});
    }
    useEffect(()=>{
        localStorage.setItem('allArchievement',JSON.stringify(allArchievement));
    },[allArchievement]);
    return (
        <BackgroundAddArchievement>
            <Title className='pt-4'>Thêm Thành Tích</Title>
            <form>
            <div className='container'>

            <div className='row'>
                <div className='col-md-5 col-xs-12'>
                    <InputForm type="text" className="form-control mt-5" placeholder="Quãng Đường" onChange={(e)=>setArchievement({ ...archievement,distance:e.target.value})}/>
                    <NoteStyle className='float-left pl-1'>Đơn vị: km</NoteStyle>
                    <InputForm type="text" className="form-control mt-5" placeholder="Thời Gian Chạy" onChange={(e)=>setArchievement({ ...archievement,totalTime:e.target.value})}/>
                    <NoteStyle className='float-left pl-1'>Đơn vị: Phút</NoteStyle>
                    <InputForm type="date" className="form-control mt-5" placeholder="Ngày Chạy" onChange={(e)=>setArchievement({ ...archievement,date:e.target.value})}/>
                    <NoteStyle className='float-left pl-1'>(Tháng-Ngày-Năm)</NoteStyle>
                    <InputForm type="text" className="form-control mt-5" placeholder="Chiều Cao" onChange={(e)=>setArchievement({ ...archievement,height:e.target.value})}/>
                    <NoteStyle className='float-left pl-1'>Đơn vị: Cm</NoteStyle>
                </div>
                <div className='col-md-2'></div>
                <div className='col-md-5 col-xs-12'>
                    <InputForm type="text" className="form-control mt-5" placeholder="Cân Nặng" onChange={(e)=>setArchievement({ ...archievement,weight:e.target.value})}/>
                    <NoteStyle className='float-left pl-1'>Đơn vị: Kg</NoteStyle>
                    <InputForm type="text" className="form-control mt-5" placeholder="Địa Điểm Bắt Đầu" onChange={(e)=>setArchievement({ ...archievement,start:e.target.value})}/>
                    <NoteStyle className='float-left pl-1'>Ví dụ: Phạm Hùng</NoteStyle>
                    <InputForm type="text" className="form-control mt-5" placeholder="Địa Điểm Kết Thúc" onChange={(e)=>setArchievement({ ...archievement,end:e.target.value})}/>
                    <NoteStyle className='float-left pl-1'>Ví dụ: Khuất Duy Tiến</NoteStyle>
                    <textarea type="text" className="form-control mt-5" placeholder="Mô Tả" style={{height:"65px", fontSize:"25px"}} onChange={(e)=>setArchievement({ ...archievement,comment:e.target.value})}/>
                    <NoteStyle className='float-left pl-1 mb-1'>Ví dụ: Thời gian chạy chưa đủ</NoteStyle>
                </div>
            </div>
            <div className='row'>
                <div className='col-2'></div>
                <div className='col-md-12 col-xs-12'>
                    <InputForm type="text" className="form-control mb-1 mt-1" placeholder="Link Ảnh" onChange={(e)=>setArchievement({ ...archievement,imageLink:e.target.value})}/>
                    <ButtonAdd type="reset" className='form-control btn btn-outline-info mt-2' onClick={handleAddArchievement}> <i className="fas fa-save"> </i> Lưu Lại</ButtonAdd>
                    <ReturnButton href='/thanh-tich' className='btn btn-outline-primary form-control mt-4 mb-3'><i className="fa fa-undo"></i> Trở Về</ReturnButton>
                </div>
            </div>
            </div>
            </form>
        </BackgroundAddArchievement>      
    )
}
