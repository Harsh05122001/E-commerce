import { Add, Remove } from "@mui/icons-material";
import React, { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../requestMethods";
import {useNavigate} from "react-router-dom";


const KEY =  "pk_test_51KcZDISDQCTL5iM10Ds2OTapro2fR1PqAcmvSGhDIfFpDeQsDICzZ293S2oYI98bHNwUkjSwhv2jgIBxnD5yhq7n00PxgXQ6cR";

const Container = styled.div`

`;
const Wrapper =styled.div`
    padding:20px;
`;
const Title = styled.h1`
    font-weight:200;
    text-align:center;
`;
const Top =styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
`;
const TopButton = styled.button`
    padding:10px;
    font-weight:600;
    cursor:button;
    margin-bottom:20px;
    border : ${props=>props.type==="filled" && "none"};
    background-color: ${(props)=>props.type === "filled" ? "black":"transparent"};
    color : ${props=>props.type==="filled" && "white"};
`;
const TopTexts = styled.div``;
const Toptext = styled.span`
    text-decoration:underline;
    cursor:pointer;
    margin :0 10px;
`
const Bottom  =styled.div`
    display :flex;
    justify-content:space-between;
`;
const Info = styled.div`
    flex :3;
`;
const Summary = styled.div`
    flex:1;
    border : 0.5px solid lightgray;
    border-radius:10px;
    padding:20px;
    height:50vh;
`;
const Product = styled.div`
    display:flex;
    justify-content:space-between;
`;
const ProductDetail = styled.div`
    flex:2;
    display:flex;

`
const Details= styled.div`
    padding:20px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
`;
const Image = styled.img`
    width:200px;

`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color : ${props=>props.color}

`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;

const ProductAmountContainer =styled.div`
    display:flex;
    align-items:center;
    margin-bottom:20px;

`;
const ProductAmount =styled.div`
    font-size:24px;
    margin:5px;
`;

const ProductPrice =styled.div`
    font-size:30px;
    font-weight:200;
`;
const Hr  = styled.hr`
    background-color:#eee;
    border: none;
    height:1px;
`;
const SummaryTitle = styled.h1`
    font-weight:200;

`;
const SummaryItem = styled.div`
    margin: 30px 0px;
    display:flex;
    justify-content:space-between;
    font-weight:${props=>props.type==="total"&& "500"};
    font-size: ${props=>props.type==="total"&& "24px"}

`;
const SummaryItemtext = styled.span``;
const SummaryItemPrice = styled.span``;
const SummaryButton = styled.button`
    width:100%;
    padding:10px;
    background-color:black;
    color:white;
    fnot-weight:600;
`;
function Cart(){
    const cart = useSelector(state=>state.cart);
    const [stripeToken,setStripeToken] = useState(null);
    const history = useNavigate();
  
    function onToken(token){
        setStripeToken(token);
    }
    useEffect(()=>{
        const makeRequest = async ()=>{
            try{
                const res =await userRequest.post("/checkout/payment",{
                    tokenId:stripeToken.id,
                    amount:cart.total*100,
                });
                history("/sucesss");
                history("/success",{data:res.data});
                
            }catch(err){

            }
        };
        stripeToken && makeRequest();

    },[stripeToken,cart.total])
    return(
        <Container>
            <Navbar/>
            <Announcement></Announcement>
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>

                    <TopButton>Continue Shopping</TopButton>
                    <TopTexts>
                        <Toptext>Shopping Bag(2)</Toptext>
                        <Toptext>Your WishList(0)</Toptext>
                    </TopTexts>
                    <TopButton type = "filled">CheckOut Now</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        {cart.products.map(product=>(<Product>
                            <ProductDetail>
                                <Image src = {product.img}/>
                                <Details>
                                    <ProductName><b>Product:</b>{product.title}</ProductName>
                                    <ProductId><b>ID:</b>{product._id}</ProductId>
                                    <ProductColor color = {product.color}/>
                                    <ProductSize><b>Size:</b>{product.size}</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>{product.quantity}</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>${product.price*product.quantity}</ProductPrice>
                            </PriceDetail>
                        </Product>))}
                        <Hr></Hr>
                        
                    </Info>
                    <Summary>
                        <SummaryTitle>Order Summary</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemtext>Subtotal</SummaryItemtext>
                            <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>

                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemtext>Estimated Shipping</SummaryItemtext>
                            <SummaryItemPrice>$5.9 </SummaryItemPrice>

                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemtext>Shipping Discount</SummaryItemtext>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>

                        </SummaryItem>
                        <SummaryItem type = "total">
                            <SummaryItemtext >Total</SummaryItemtext>
                            <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>

                        </SummaryItem>
                        <StripeCheckout 
                            name = "E-commerce" 
                            image ="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freevectors.net%2Fe-commerce-logo-36682&psig=AOvVaw3_1VkHVuV1-kROW75JkX7h&ust=1647257407980000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOD39Zv-wvYCFQAAAAAdAAAAABAD"
                            billingAddress
                            shippingAddress
                            description={`Your total is $${cart.total}`}
                            amount={cart.total*100}
                            token = {onToken}
                            stripeKey = {KEY}
                        >
                        <SummaryButton>Checkout Now</SummaryButton>
                        </StripeCheckout>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    );
}
export default Cart;