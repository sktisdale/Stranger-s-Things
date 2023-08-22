import React from "react"
import { useState, useEffect } from "react";

const COHORT_NAME = '2305-FTB-MT-WEB-PT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export default function NewPost({token}) {

    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [success, setSuccess] = useState(false)

 
    async function createPost(event) {
      event.preventDefault()
            try {
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
                if (result.success){
                  setTitle("")
                  setDescription("");
                  setPrice("");
                  setSuccess(true)
                }
                return result
              } catch (err) {
                console.error(err);
              }
            
        }
           
      
    return (
        <div id="newPostContainer">
        {!success?<h2>New Post</h2>:<h2>Post submitted!</h2> }
        
        {!success? 
         <form onSubmit={createPost}>
            <div>
              <label htmlFor = "title">Title:</label>
              <br />
              <input type="text" id = "title" name = "title" value = {title}
              onChange={(event) => setTitle(event.target.value)}/>
            </div>
            <br/>
            <div>
              <label htmlFor = "description">Description:</label>
              <br />
              <input type="text" id = "description" name = "description" value = {description} onChange={(event) => setDescription(event.target.value)}/>
            </div>
            <br/>
            <div>
              <label htmlFor = "price">Price:</label>
              <br />
              <input type="text" id = "price" name = "price" value = {price} onChange={(event) => setPrice(event.target.value)}/>
            </div>
            <br/>
            <input type="submit" value="Submit"/>
            
         </form> 
         :
         <button onClick={()=>{setSuccess(false)}}>Post again</button>
        }
        
        </div>
    )
   
}