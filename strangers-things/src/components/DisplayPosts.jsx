import { useState, useEffect } from "react"
import DeletePost from "./DeletePost";
import Message from "./Messages";
import SearchBar from "./SearchBAr";
const COHORT_NAME = '2305-FTB-MT-WEB-PT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export default function Posts({ token, user }) {

    const [posts, setPosts] = useState([]);
    const [keyword, setKeyword] = useState("");
    function updateKeyword(keyword) {
        const filteredPosts = posts.filter((post) => {
        return `${post.title.toLowerCase()} ${post.description.toLowerCase()} ${post.price.toLowerCase()}`.includes(keyword.toLowerCase())})
       setKeyword(keyword)
       setPosts(filteredPosts)
      }
    useEffect(() => {
        async function getPosts() {
            try {
                const response = await fetch(`${BASE_URL}/posts`)
                const result = await response.json();
                // console.log(result);
                setPosts(result.data.posts)
                return result
            } catch (err) {
                console.error(err);
            }
        }

        getPosts()

    }, [])

    return (
        <>
        
        <div className="centeredContainer"> {/* Correct class name here */}
        <SearchBar keyword={keyword} onChange={updateKeyword}/>  
        
            {posts.map((post) => {
                let yourpost = (post.author.username === user);
                return (
                    
                    <div className="postContainer" key={post._id}>
                        <div className="postInfo">
                            <h3 className="postTitle">{post.title}</h3>
                            <p className="descr">Description:{post.description}</p>
                            <p className="price">Price:{post.price}</p>
                            {yourpost ? 
                            <button onClick={() => DeletePost(post._id)}>Delete</button> 
                            : token ?
                              <Message POST_ID={post._id} token={token} /> : <></>}
                        </div>
                    </div>
                  
                    
                );
            })}
        </div>
        </>
    );
}