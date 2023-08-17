import { useState, useEffect } from "react"
import Message from "./Messages";

const COHORT_NAME = '2305-FTB-MT-WEB-PT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export default function Posts({token}){

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        async function getPosts(){
            try {
                const response = await fetch(`${BASE_URL}/posts`)
                const result = await response.json();
                console.log(result);
                setPosts(result.data.posts)
                return result
              } catch (err) {
                console.error(err);
              }
        }

        getPosts()

    }, [])
    


    return(<>   
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            {
            posts.map((post)=>{
                return (
                    <tr key={post._id}>
                        <td>{post.title}</td>
                        <td>{post.description}</td>
                        <td>{post.price}</td>
                        <td>{<Message POST_ID={post._id} token={token} />}</td> 
                    </tr>
                )
            })
            }
        </tbody>
    </table>
      </>
    )
  }