import React, { useState } from "react";
import styled from "styled-components";
import {login} from "../redux/apiCalls";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const Container = styled.div`
    width:100vw;
    height:100vh;
   
    background:linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("https://10ecommercetrends.com/wp-content/uploads/2019/11/yellow-dance.jpg") center;
    background-size:cover;
    display:flex;
    align-items:center;
    justify-content:center; 
    

    
`;
const Wrapper = styled.div`
    padding:20px;
    width:25%;
    background-color:white;
   
    

`;
const Title = styled.h1`
    font-size:24px;
    font-weight:300;

`;
const Form = styled.form`
    display:flex;
    flex-direction:column;

`;
const Input  = styled.input`
    flex:1;
    min-width:40%;
    margin:10px 0px;
    padding:10px;

`;

const Button = styled.button`
    
    width:40%;
    border:none;
    margin-top:20px;
    padding:15px 20px;
    background-color:teal;
    color:white;
    cursor:pointer;
    margin-bottom:10px;
    &:disabled{
        color:green;
        cursor:not-allowed;
    }
    
`;
const Link = styled.a`
    margin :5px 0px;
    font-size:12px;
    text-decoration:underline;
    cursor:pointer;

`;
const Error = styled.span`
    color:red;
`
function Login(){
    const [username,setUsername] =useState("");
    const [password,setPassword] = useState("");
    const dispatch = useDispatch();
    const {isFetching,error} = useSelector((state)=>state.user);
    function handleClick(e){
        e.preventDefault();
        login(dispatch,{username,password});
    }
    
    return(
        <Container>
            <Wrapper>
                <Title>Sign In</Title>
                <Form>
                    <Input placeholder= "Username" onChange = {(e)=>setUsername(e.target.value)}/>
                    <Input type = "password" placeholder= "Password" onChange = {(e)=>setPassword(e.target.value)}/>
                    <Button onClick=  {handleClick} disabled ={isFetching}>Login</Button>
                    
                    {!error && <Error>Incorrect Credentials!</Error>}
                
                
                <Link>DO NOT REMEMBER YOUR PASSWORD?</Link>
                <Link>CREATE AN ACCOUNT</Link>
                </Form>

            </Wrapper>

        </Container>
    );
}
export default Login;