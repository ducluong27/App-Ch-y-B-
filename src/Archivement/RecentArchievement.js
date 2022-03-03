import React, { useState } from 'react';
import ArchievementItem from './ArchievementItem';
import {Title,BackgroundArChievement } from './RecentArchievementStyle';
export default function RecentArchievement() {
  const [statusTitle,setStatusTitle]=useState(false);
  const childToParent = (childdata) => {
    setStatusTitle(childdata)
    console.log(childdata);
  }
  return <div>   
      <BackgroundArChievement>
        {statusTitle ? <Title className='pt-3'>Sửa Thành Tích</Title>:<Title className='pt-3'>Thành tích gần đây của bạn</Title>}
        <div className="container">
          <div className="row">
            <ArchievementItem childToParent={childToParent}/>
          </div>
        </div>
      </BackgroundArChievement>
  </div>;
}
