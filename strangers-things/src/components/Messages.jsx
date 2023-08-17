import { useState } from "react";

export default function Message({token, POST_ID}){
    const COHORT_NAME = '2305-FTB-MT-WEB-PT'
    const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

    const [message, setMessage] = useState('');
    const [sent, setSent] = useState(false);

    const postMessage = async (event) => {
        event.preventDefault();
        try {
          const response = await fetch(`${BASE_URL}/posts/${POST_ID}/messages`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
              message: {
                content: message
              }
            })
          });
          const result = await response.json();
          console.log(result);
          if (result.success) {
            setSent(true);
            setTimeout(()=>{setSent(false)}, 3000);
            setMessage('')
          }
          
          return result
        } catch (err) {
          console.error(err);
        }
      }

      return(<>
      {!sent? 
      <form onSubmit={postMessage}>
        <input type="text" className="message" placeholder="Message here..." value={message} onChange={(event)=>{setMessage(event.target.value)}} />
        <input type="submit" value="Send" />
        </form> 
        : 
        <a>message sent!</a>
      }
      </>)
}