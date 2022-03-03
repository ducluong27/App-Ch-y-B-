import React,{useState} from 'react';
import {DetailsInfo, DetailsInfoItem} from './ProfileStyle';
function BodyIndex() {
    const getLocal =()=>{
        let list=localStorage.getItem('allArchievement');
        if (list){
            return JSON.parse(list);
        }
        else return [];
      }
    const [items, setItems] = useState(getLocal());
    const getLocalCalo =()=>{
        let list=localStorage.getItem('calo');
        if (list){
            return JSON.parse(list);
        }
        else return [];
      }
    const [itemsCalo, setItemsCalo] = useState(getLocalCalo());
    const AverageRunTime=()=>{
        let total=0;
        for (let index = 0; index < items.length; index++) {
            total=total+parseFloat(items[index].totalTime)
        }
        return total/(items.length);
    }
    const AverageRunDistance=()=>{
        let total=0;
        for (let index = 0; index < items.length; index++) {
            total=total+parseFloat(items[index].distance)
        }
        return total/(items.length);
    }
    const CaloAverage =()=>{
        let total=0;
        for (let index = 0; index < itemsCalo.length; index++) {
            total=total+parseFloat(itemsCalo[index])
        }
        return total/(itemsCalo.length);
    }
    return (
    <div>
        <div className='ml-2 mt-5 mb-2'>
            <DetailsInfo>Cân Nặng: <DetailsInfoItem className='card-title mt-1'>{items[items.length-1].weight} </DetailsInfoItem><DetailsInfoItem className='card-title'>kg</DetailsInfoItem></DetailsInfo>

            <DetailsInfo className='mt-1'>Chiều Cao: <DetailsInfoItem className='card-title'>{items[items.length-1].height} </DetailsInfoItem><DetailsInfoItem className='card-title'>cm</DetailsInfoItem></DetailsInfo>
            <DetailsInfo className='mt-1'>Thời Gian Chạy Mới Nhất: <DetailsInfoItem className='card-title'>{items[items.length-1].totalTime}</DetailsInfoItem><DetailsInfoItem className='card-title'>Phút/Lần</DetailsInfoItem></DetailsInfo>
            <DetailsInfo className='mt-1'>Thời Gian Chạy Trung bình: <DetailsInfoItem className='card-title'>{AverageRunTime()} </DetailsInfoItem><DetailsInfoItem className='card-title'>Phút</DetailsInfoItem></DetailsInfo>
            <DetailsInfo className='mt-1'>Quãng Đường Đã Chạy Mới Nhất: <DetailsInfoItem className='card-title'>{items[items.length-1].distance} </DetailsInfoItem><DetailsInfoItem className='card-title'>Km</DetailsInfoItem></DetailsInfo>
            <DetailsInfo className='mt-1'>Quãng Đường Chạy Trung bình: <DetailsInfoItem className='card-title'>{AverageRunDistance()} </DetailsInfoItem><DetailsInfoItem className='card-title'>km/Lần</DetailsInfoItem></DetailsInfo>
            <DetailsInfo className='mt-1'>Lượng Calo Tiêu Thụ Mới Nhất: <DetailsInfoItem className='card-title'>{itemsCalo[itemsCalo.length-1]} </DetailsInfoItem><DetailsInfoItem className='card-title'>Calo/Phút</DetailsInfoItem></DetailsInfo>
            <DetailsInfo className='mt-1'>Lượng Calo Tiêu Thụ Trung Bình: <DetailsInfoItem className='card-title'>{CaloAverage()} </DetailsInfoItem><DetailsInfoItem className='card-title'>Calo/Phút/Lần</DetailsInfoItem></DetailsInfo>
            <DetailsInfo className='mt-1'>Tự Mô Tả Tình Hình sức Khỏe: <DetailsInfoItem className='card-title'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</DetailsInfoItem></DetailsInfo>
        </div>
    </div>);
}

export default BodyIndex;
