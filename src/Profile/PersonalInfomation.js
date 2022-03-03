import React from 'react';
import {DetailsInfo, DetailsInfoItem} from './ProfileStyle';
export default function PersonalInfomation() {
    return (
    <div>
        <div className='ml-2 mt-5 mb-2'>
            <DetailsInfo className='mt-1'>Tuổi: <DetailsInfoItem className='card-title'>21</DetailsInfoItem></DetailsInfo>

            <DetailsInfo className='mt-1'>Giới Tính: <DetailsInfoItem className='card-title'>Nam</DetailsInfoItem></DetailsInfo>

            <DetailsInfo className='mt-1'>Năm Sinh: <DetailsInfoItem className='card-title'>2001</DetailsInfoItem></DetailsInfo>

            <DetailsInfo className='mt-1'>Quê Quán: <DetailsInfoItem className='card-title'>Cà Mau</DetailsInfoItem></DetailsInfo>

            <DetailsInfo className='mt-1'>Nghề Nghiệp: <DetailsInfoItem className='card-title'>Sinh Viên</DetailsInfoItem></DetailsInfo>

            <DetailsInfo className='mt-1'>Sở Thích: <DetailsInfoItem className='card-title'>Bóng Đá</DetailsInfoItem></DetailsInfo>

            <DetailsInfo className='mt-1'>Tính Cách: <DetailsInfoItem className='card-title'>Vui Vẻ</DetailsInfoItem></DetailsInfo>

            <DetailsInfo className='mt-1'>Nhận xét: <DetailsInfoItem className='card-title'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</DetailsInfoItem></DetailsInfo>
        </div>
    </div>);
}
