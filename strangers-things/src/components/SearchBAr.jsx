import React, { useState } from "react";
const search ={
    color: "black",
    margin: '0.5em',
    border: 'red 2px solid'
   
}

export default function SearchBar({keyword, onChange}){
return(
    <>
    <input key="search" 
    style={search}
    id="search"
    value={keyword} 
    placeholder="Search Here ..." 
    onChange={(e)=>{onChange(e.target.value)}}
    
    />
    </>
)
}