import {Routes, Route} from 'react-router-dom'
import './App.css';
import MainContentBG from './MainContent/MainContentBG';
import Navbar from './NavbarApp/Navbar';
import Analysis from './Analysis/Analysis';
import Profile from './Profile/Profile';
import Statistical from './Statistical/Statistical'
import RecentArchievement from './Archivement/RecentArchievement';
import AddArchievement from './Archivement/AddArchievement';
import Footer from './Footer/Footer';
function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<MainContentBG/>}/>
        <Route path='/phan-tich' element={<Analysis/>}/>
        <Route path='/nguoi-dung' element={<Profile/>}/>
        <Route path='/thong-ke' element={<Statistical/>}/>
        <Route path='/thanh-tich' element={<RecentArchievement/>}/>
        <Route path='/them-thanh-tich' element={<AddArchievement/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
