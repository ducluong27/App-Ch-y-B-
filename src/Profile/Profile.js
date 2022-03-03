import React, { useState } from 'react';
import {LeftBackgroundProfile,ImageAvatar,UserName,RightBackgroundProfile,ButtonDetail,BackgroundProfile} from './ProfileStyle';
import PersonalInfomation from './PersonalInfomation';
import BodyIndex from './BodyIndex';
function Profile() {
  const [infoStatus,setInfoStatus]=useState(true);
  const ChangeInfoStatus =()=>{
    setInfoStatus(!infoStatus);
  }
  return (
    <BackgroundProfile>
      <div className='container'>
        <div className="row h-100">
          <LeftBackgroundProfile className='col-md-4 col-xs-12'>
            <ImageAvatar src='https://img5.thuthuatphanmem.vn/uploads/2021/11/22/anh-avatar-gau-cute_092859783.jpg' className='img-fluid rounded-circle mt-5 mb-4' />
            <UserName>Nguyễn Văn A</UserName>
            <div className='ml-2 mr-2 mt-5'>
              <ButtonDetail className="btn btn-outline-primary form-control mb-3" disabled={infoStatus} onClick={()=>ChangeInfoStatus()}><i className='	fas fa-user-alt'></i> Thông Tin Cá Nhân</ButtonDetail>
              <ButtonDetail className="btn btn-outline-primary form-control mt-3" disabled={!infoStatus} onClick={()=>ChangeInfoStatus()}><i className='fas fa-heartbeat'></i> Chỉ Số Cơ Thể</ButtonDetail>
            </div>
            
          </LeftBackgroundProfile>
          <RightBackgroundProfile className='col-md-7 col-xs-12'>
            {infoStatus ? <PersonalInfomation/>: <BodyIndex/>}
          </RightBackgroundProfile>
        </div>
      </div>
    </BackgroundProfile>);
}

export default Profile;
