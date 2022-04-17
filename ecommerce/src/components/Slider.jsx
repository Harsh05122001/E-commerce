import React,{useState} from "react";
import styled from "styled-components"
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import pic from "../images/profile.png";
import { slideritems } from "../data";
const Container = styled.div`
    width : 100%;
    height: 100vh;
    display:flex;
    
    
    
    position:relative;
    overflow:hidden;
    
   

`;
const Arrow = styled.div`
    width :50px;
    height:50px;
    background-color: #fff7f7;
    border-radius : 50%;
    display:flex;
    align-items:center;
    justify-content:center;
    position:absolute;
    top:0;
    bottom:0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin:auto;
    cursor :pointer;
    opacity:0.5;
    z-index:2;
`

const Wrapper = styled.div`
    height :100%;
    display:flex;
    transition: all 1.5s ease;
    transform:translateX(${props=>props.slideIndex*-100}vw);

`;
const ImgConatiner = styled.div`
    height:100%;
    flex:1;
`
const Image = styled.img`
    height:80%;
`;
const Infocontainer = styled.div`
    flex:1;
    padding:50px;
`;
const Title = styled.h1`
    font-size:70px;

`;
const Desc  =styled.p`
    margin:50px 0px;
    font-size:20px;
    font-weight:500;
    letter-spacing:3px;
`;
const Button = styled.button`
    padding:10px;
    background-color:transparent;
    font-size:20px;
    cursor:pointer;
`;
const Slide = styled.div`
    width : 100vw;
    heigh:100vh;
    display:flex;
    align-items:center;
    background-color: #${props=>props.bg}
`;
function Slider(){
    const [slideIndex, setslideIndex] = useState(0);
    function handleClick(direction){
        if(direction ==="left"){
            setslideIndex(slideIndex>0?slideIndex-1:2);

        }
        if(direction==="right"){
            setslideIndex(slideIndex<2?slideIndex+1:0);
        }
    }
    return(
        <Container>
            <Arrow direction = "left" onClick = {()=>handleClick("left")}>
                <ArrowLeftIcon/>
            </Arrow>
            <Wrapper slideIndex = {slideIndex}>
            {slideritems.map((item)=>(

                <Slide bg = {item.bg} key = {item.id}>
                <ImgConatiner>
                    <Image src ={pic}/>
                </ImgConatiner>
                <Infocontainer>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <Button>Shop Now</Button>
                </Infocontainer>
                
                </Slide>

            ))}
            
                
            </Wrapper>
            <Arrow direction = "right" onClick = {()=>handleClick("right")} >
                <ArrowRightIcon/>
            </Arrow>

        </Container>
    );
}
export default Slider;