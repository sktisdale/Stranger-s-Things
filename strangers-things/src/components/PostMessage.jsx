import {useState, useEffect} from "react"


export default function PostNewMessage({token, post}){
    const [message, setMessage]= useState("")
    const [isPostAuthor, setIsPostAuthor] = useState(false);
    const COHORT_NAME = '2305-FTB-MT-WEB-PT'
    const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

    const postMessage = async (event) => {
         event.preventDefault();
        try {
          const response = await fetch(`${BASE_URL}/posts/5e8929ddd439160017553e06/messages`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
             'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
              message: {
                content: "Do you still have this?  Would you take $10 less?"
              }
            })
          });
          const result = await response.json();
          console.log(result);
         
        } catch (err) {
          console.error(err);
        }
      };

      useEffect(()=> {
        // is logged-in user the post author?
        setIsPostAuthor(post.author._id ===token.userId);},
        [post.author._id, token.userId]);

        // display message form only if logg-ing user is not hte poster
    return (
        <>
            {!isPostAuthor && (
                <div>
                <h2>Respond to this post</h2>
                 <form onSubmit={postMessage}>
                        <label htmlFor = "message">Send a message:</label>
                        <input 
                        type = "text" 
                        id = "message" 
                        name = "message" 
                        value = {message} 
                        onChange={(event)=> setMessage(event.target.value)}
                        />
                        <input type="submit" name="submit" id="submit" value="Post Message" />
                </form>
                </div>
            )}
        </>
    );
}



// Messages Form
// For any post, you should add a form to send a message to the post author, only if there is a logged in user and the logged in user is not the one who made it.

// The message form really only needs a text input, and a button to create the message.

// Again, like the delete button, the submit handler will need a way to know how to form the correct URL so that the API responds, so make sure you're recovering it from the post element, if you're attaching it as data to begin with.

// 1. create a message form
// 2. will need a function to create the message
