import React from "react"
import { useState, useEffect } from "react";

const COHORT_NAME = '2305-FTB-MT-WEB-PT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export default function NewPost({token}) {

    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

 
    async function createPost(event) {
      event.preventDefault()
            try {
                // let token = localStorage.setItem("token")
                const response = await fetch(`${BASE_URL}/posts`, {
                  method: "POST",
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                  },
                  body: JSON.stringify({
                    post: {
                      title: title,
                      description: description,
                      price: price,
                    }
                  })
                });
                const result = await response.json();
                console.log(result);
                
                return result
              } catch (err) {
                console.error(err);
              }
            
        }
           
      
    return (
        <>
        <h2>New Post</h2>
         <form onSubmit={createPost}>
            <div>
              <label htmlFor = "title">Title:</label>
              <input type="text" id = "title" name = "title" value = {title}
              onChange={(event) => setTitle(event.target.value)}/>
            </div>
            <br/>
            <div>
              <label htmlFor = "description">Description:</label>
              <input type="text" id = "description" name = "description" value = {description} onChange={(event) => setDescription(event.target.value)}/>
            </div>
            <br/>
            <div>
              <label htmlFor = "price">Price:</label>
              <input type="text" id = "price" name = "price" value = {price} onChange={(event) => setPrice(event.target.value)}/>
            </div>
            <br/>
            <input type="submit" value="Submit"/>
            
         </form>  
        </>
    )
}