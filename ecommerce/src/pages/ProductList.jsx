import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

const Container = styled.div`

`;
const Title = styled.h1`
    margin:20px;
`;
const FilterContainer = styled.div`
    display:flex;
    justify-content:space-between;

`;
const Filter = styled.div`
    margin:20px;
`;
const FilterText = styled.span`
    font-size:20px;
    font-weight:600;
    margin-right:20px;
`;
const Select = styled.select`
    padding:10px;
    margin-right:20px;

`;
const Option = styled.option`

`;

function ProductList(){
    const location = useLocation();
    
    const cat = location.pathname.split("/")[2];
   
    const [filter,setFilters] = useState({});
    const [sort,setSort] = useState("newest");
    function handleFilters(event){
        const value =event.target.value;
        setFilters({
            ...filter,
            [event.target.name]:value,
        });

    };
    console.log(filter);

    return(
        <Container>
            <Navbar/>
            <Announcement/>
            <Title>{cat}</Title>
            <FilterContainer>
                <Filter><FilterText>Filter Product:</FilterText>
                <Select name = "color" onChange = {handleFilters}>
                    <Option disabled selected> Color</Option>
                    <Option>white</Option>
                    <Option>black</Option>
                    <Option>red</Option>
                    <Option>blue</Option>
                    <Option>yellow</Option>
                    <Option>green</Option>

                </Select>
                <Select name = "size" onChange = {handleFilters}>
                    <Option disabled selected> Size</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                    

                </Select>
                
                
                
                </Filter>
                <Filter><FilterText>Sort Product:</FilterText>
                <Select onChange={(e)=>setSort(e.target.value)}>
                    <Option value ="newest">Newest</Option>
                    <Option value ="asc">Price (asc)</Option>
                    <Option value ="desc">Price (desc)</Option>
                </Select>
                
                
                </Filter>
            </FilterContainer>
            <Products cat = {cat} filters= {filter} sort = {sort}/>
            <Newsletter/>
            <Footer/>
        </Container>
    );
}
export default ProductList;