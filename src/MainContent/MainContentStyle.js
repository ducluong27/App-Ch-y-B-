import styled from 'styled-components'
import Background from '../Images/bg1.jpg'
export const MainBackground = styled.div`
    background-image: url(${Background}); 
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
`
export const MainButton = styled.a`
    color: #20365e ;
    border-radius: 25px;
    border:1px solid #20365e ;
    background:#b9d3ed;
    font-weight:500;
    font-size:16px;
    &:hover{
        background-color:#6c757d ;
        color: #fff ;
        border: #6c757d;
    };
    @media (min-width: 992px) {
        font-size:22px;
    }
`
export const ButtonWrapper=styled.div`
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
`
