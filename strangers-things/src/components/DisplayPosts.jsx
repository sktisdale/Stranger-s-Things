import { useState, useEffect } from "react"
import DeletePost from "./DeletePost";
import Message from "./Messages";

const COHORT_NAME = '2305-FTB-MT-WEB-PT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export default function Posts({ token, user }) {

    const [posts, setPosts] = useState([]);

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
        <div className="centeredContainer"> {/* Correct class name here */}
            {posts.map((post) => {
                let yourpost = (post.author.username === user);
                return (
                    <div className="postContainer" key={post._id}>
                        <div className="postInfo">
                            <h3 className="postTitle">{post.title}</h3>
                            <p className="descr">Description:{post.description}</p>
                            <p className="price">Price:{post.price}</p>
                            {yourpost ? <button onClick={() => DeletePost(post._id)}>Delete</button> : <Message POST_ID={post._id} token={token} />}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}