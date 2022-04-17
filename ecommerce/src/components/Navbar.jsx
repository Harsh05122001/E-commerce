import React from "react";
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { mobile } from "../responsive";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import { logout } from "../redux/userRedux";
const Container = styled.div`   
    height: 60px;
    margin-top:-12px;
    margin-left:-8px;
    margin-right:-8px;
    margin-bottom:20px;
    ${mobile({backgroundColor : "red"})}
    

`;
const Wrapper = styled.div`
    padding :10px 20px;
    display : flex;
    justify-content: space-between;
`;
const Left  = styled.div`
    flex:1;
    display: flex;
    align-items:center;
`;
const Center = styled.div`
    flex:1;
    text-align:center;
`;
const Right  = styled.div`
    flex :1;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    
`;
const MenuItem = styled.div`
    font-size: 14px;
    cursor:pointer;
    margin-left:25px;
`;
const Language = styled.span`
    font-size :14px;
    cursor: pointer;
`;
const SearchContainer = styled.div`
    border  : 0.5px solid lightgray;
    display :flex;
    align-items : center;
    margin-left:25px;
    padding : 5px;
    
`
const Input = styled.input` 
    border : none;
`;
const Logo = styled.h1`
    font-weight : Bold;
`;
function Navbar(){
    const quantity = useSelector(state=>state.cart.quantity);
    console.log(quantity);
    const user  = useSelector(state=>state.user.currentUser);
    const dispatch = useDispatch();

    function handleClick(){
        dispatch(logout());
    }
    
    return(
        <Container>
            <Wrapper> 
                <Left>
                    <Language>EN</Language>
                        <SearchContainer>
                            <Input/>
                            <SearchIcon style = {{color:"gray",fontSize:16}}/>
                        </SearchContainer>
                </Left>
                <Center>
                    <Logo>E-commerce</Logo>
                </Center>
                <Right>
                    {user && <MenuItem onClick={handleClick}>Logout</MenuItem>}
                    {!user && <Link to = "/register"><MenuItem>REGISTER</MenuItem></Link>}
                    {!user && <Link to ="/login"><MenuItem>SIGN IN</MenuItem></Link>}
                    <Link to= "/cart">
                    <MenuItem>
                    
                    <Badge badgeContent = {quantity} color="primary">
                        <ShoppingCartOutlinedIcon  />
                     </Badge>
                     
                    </MenuItem>
                    </Link>
                </Right>
                
            </Wrapper>

       
        </Container>
    );
}
export default Navbar;
