import React from "react";
import styled from "styled-components";
const Container = styled.div`
    width:100vw;
    height:100vh;
   
    background:linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("https://media.istockphoto.com/photos/street-style-shoot-woman-on-pink-wall-swag-girl-wearing-jeans-jacket-picture-id1284839442?b=1&k=20&m=1284839442&s=170667a&w=0&h=3pl57qkeSqRm_4Eqkmwplom6uhErSFE4aaPVBAzjws4=") center;
    background-size:cover;
    display:flex;
    align-items:center;
    justify-content:center; 
    

    
`;
const Wrapper = styled.div`
    padding:20px;
    width:40%;
    background-color:white;

`;
const Title = styled.h1`
    font-size:24px;
    font-weight:300;

`;
const Form = styled.form`
    display:flex;
    flex-wrap:wrap;

`;
const Input  = styled.input`
    flex:1;
    min-width:40%;
    margin:20px 10px 0px 0px;
    padding:10px;

`;
const Agreement = styled.span`
    font-size:12px;
    margin: 20px 0px;
`;
const Button = styled.button`
    
    width:40%;
    border:none;
    margin-top:20px;
    padding:15px 20px;
    background-color:teal;
    color:white;
    cursor:pointer;
    
`;



function Register(){
    return(
        <Container>
            <Wrapper>
                <Title>Create An Account</Title>
                <Form>
                    <Input placeholder= "Name"/>
                    <Input placeholder= " Last Name"/>
                    <Input placeholder = "Username" />
                    <Input placeholder = "Email"/>
                    <Input placeholder = "Password"/>
                    <Input placeholder= "Confirm Password"/>
                </Form>
                <Agreement>By Creating An Account, I consent To processing of my personal data in accordance with the <b>PRIVACY POLICY</b></Agreement>
                <Button>Create</Button>

            </Wrapper>

        </Container>
    );
}
export default Register;
