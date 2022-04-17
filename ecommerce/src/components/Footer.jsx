import React from "react";
import styled  from "styled-components";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RoomIcon from '@mui/icons-material/Room';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
const Container = styled.div`
    display:flex;
`;
const Left = styled.div`
    flex:1;
    dispaly:flex;
    flex-direction:column;
    padding:20px;
`;
const Center = styled.div`
    flex:1;
    padding:20px;
`;
const Title = styled.h3`
    margin-bottom:30px;
`;
const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;

`;
const ListItem = styled.li`
    width:50%;
    margin-bottom:10px;
`;
const Right = styled.div`
    flex:1;
    padding:20px;
`;
const Logo = styled.h1`
    
`;
const Desc = styled.p`
    margin:20px 0px;
`;
const SocialContainer = styled.div`
        display:flex;
`;
const SocialIcon = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    color:white;
    background-color:#${props=>props.color};
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:20px;
    cursor:pointer;
`;
const ContactItem =styled.div`
    display:flex;
    align-items:center;
    margin-bottom:20px;
`;
const Payment = styled.img`
    widtg:100%;
`;

function Footer(){
    return(
        <Container>
            <Left>
                <Logo>E-commerce</Logo>
                <Desc>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Desc>
                <SocialContainer >
                    <SocialIcon color = "3B5999">
                        <FacebookIcon/>
                    </SocialIcon>
                    <SocialIcon color = "E4405F">
                        <InstagramIcon/>
                    </SocialIcon>
                    <SocialIcon color = "55ACEE">
                        <TwitterIcon/>
                    </SocialIcon>
                    <SocialIcon color = "E60023">
                        <PinterestIcon/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Women Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>

                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                    
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                
                <RoomIcon style = {{marginRight:"10px"}}/>    Address
                </ContactItem>
                <ContactItem>
                <LocalPhoneIcon style = {{marginRight:"10px"}} />  Phone No.
                </ContactItem>
                <ContactItem>
                <EmailIcon style = {{marginRight:"10px"}} />  Email
                </ContactItem>
                <Payment src = ""/>

            </Right>
        </Container>
    );
}
export default Footer;