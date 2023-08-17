import {useState} from "react"

export default function PostNewMessage(){
    const [message, setMessage]= useState(null)
    return (
        <>
            <h2>Respond to this post</h2>
            <form onSubmit={(()=>{})}>
                <label htmlFor = "message">Send a message:</label>
                <input type = "text" id = "message" name = "message" value = {message} onChange={(event)=> setMessage(event.target.value)}/>
                <input type="submit" value="Send"/>
            </form>
        </>
    )
}



// Messages Form
// For any post, you should add a form to send a message to the post author, only if there is a logged in user and the logged in user is not the one who made it.

// The message form really only needs a text input, and a button to create the message.

// Again, like the delete button, the submit handler will need a way to know how to form the correct URL so that the API responds, so make sure you're recovering it from the post element, if you're attaching it as data to begin with.

// 1. create a message form
// 2. will need a function to create the message
