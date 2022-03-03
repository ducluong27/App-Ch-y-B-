import React, { useState,useEffect } from 'react';
import { DetailsInfo, DetailsInfoItem, ArchievementItemBG,ImageTitle } from './RecentArchievementStyle';
import EditForm from './EditForm';
function ArchievementItem({childToParent}) {
  const [editStatus,setEditStatus]=useState(true);
  const [dataToEdit,setDataToEdit]=useState({});
  
  const getLocal =()=>{
    let list=localStorage.getItem('allArchievement');
    if (list){
        return JSON.parse(list);
    }
    else return [];
  }
  const [items, setItems] = useState(getLocal());
  let tempData=items;
  const handleDataEdit=(dataEdit)=>{
    setEditStatus(!editStatus);
    setDataToEdit(dataEdit);
    childToParent(editStatus) 
  }
  const handleDelete=(dataDelete)=>{
    
    setItems(tempData.filter(item=>item.id!==dataDelete.id));
  }
  useEffect(()=>{
    localStorage.setItem('allArchievement',JSON.stringify(tempData));
  },[tempData])
  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem('allArchievement'));
  //   if (items) {
  //    setItems(items);
  //   }
  // }, []);
  const caloList=[]
  const Calo =(weight,totalTime,distance)=>{
    caloList.push((weight/distance+totalTime/60*3.14-2).toFixed(2))
    return (weight/distance+totalTime/60*3.14-2).toFixed(2)
  }
  useEffect(()=>{
    localStorage.setItem('calo',JSON.stringify(caloList));
  },[caloList]);
  return (
    <>
      { editStatus ?
        <>
          {items.map((item)=>{
            const {id, date, distance, start, end, totalTime, comment,height,weight,imageLink}=item;
            return(
                <ArchievementItemBG className="card col-sm-6 col-lg-4 mt-5 pt-3 mt-5 mb-5" key={id}>
                  <ImageTitle src={imageLink} className="img-fluid" alt={comment}/>
                  <div className="card-body">
                    <DetailsInfo>Ngày Chạy: <DetailsInfoItem className="card-title">{date}</DetailsInfoItem></DetailsInfo>
                    <DetailsInfo>Điểm Bắt Đầu: <DetailsInfoItem className="card-title">{start}</DetailsInfoItem></DetailsInfo>
                    <DetailsInfo>Điểm Kết Thúc: <DetailsInfoItem className="card-title">{end}</DetailsInfoItem></DetailsInfo>
                    <DetailsInfo>Quãng Đường: <DetailsInfoItem className="card-title">{distance} Km</DetailsInfoItem></DetailsInfo>
                    <DetailsInfo>Thời Gian Chạy <DetailsInfoItem className="card-title">{totalTime} Phút</DetailsInfoItem></DetailsInfo>
                    <DetailsInfo>Chiều Cao: <DetailsInfoItem className="card-text">{height} Cm</DetailsInfoItem></DetailsInfo>
                    <DetailsInfo>Cân Nặng: <DetailsInfoItem className="card-text">{weight} Kg</DetailsInfoItem></DetailsInfo>
                    <DetailsInfo>Calo Tiêu Thụ: <DetailsInfoItem className="card-text">{Calo(weight,totalTime,distance)} calo/phút</DetailsInfoItem></DetailsInfo>
                    <DetailsInfo>Mô Tả: <DetailsInfoItem className="card-text">{comment}</DetailsInfoItem></DetailsInfo>
                  </div>
                  <div className='btn-group mb-3'>
                    <button className='btn btn-outline-warning' onClick={(dataEdit)=>handleDataEdit(item) }><span className='fas fa-edit'></span><h5>Sửa</h5></button>
                    <button className='btn btn-outline-danger' onClick={(dataDelete)=>handleDelete(item) }><i className="fas fa-trash-alt"></i><h5>Xóa</h5></button>
                  </div>
                </ArchievementItemBG>
            );
          })}
        </> :<><EditForm dataToEdit={dataToEdit} /></> 
      }    
    </>
  );
};

export default ArchievementItem;
