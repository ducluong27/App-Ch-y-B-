import React from 'react';
// import RecentArchievement from '../Archivement/RecentArchievement';
import {MainBackground,MainButton,ButtonWrapper} from './MainContentStyle'
export default function MainContentBG() {
  return(
    <MainBackground>
        <div className="container">
            <ButtonWrapper className=" pt-1 btn-group mt-4">
                <MainButton href="/thanh-tich" className="btn btn-success btn-archieve text-center pt-2">Thành Tích Của Bạn</MainButton>
                <MainButton href="/them-thanh-tich" className="btn btn-success btn-archieve text-center pt-2">Thêm Thành Tích</MainButton>
            </ButtonWrapper> 
        </div>
    </MainBackground>
    );
}
