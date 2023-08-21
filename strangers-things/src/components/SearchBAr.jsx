import React, { useState } from "react";

export default function SearchBar({keyword, onChange}){
return(
    <>
    <input key="search" 
    id="search"
    value={keyword} 
    placeholder="Search Here ..." 
    onChange={(e)=>{onChange(e.target.value)}}
    />
    </>
)
}