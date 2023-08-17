import { useState, useEffect } from "react";

export default function Profile({ token }) {
    const COHORT_NAME = '2305-FTB-MT-WEB-PT'
    const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

    const [userData, setUserData] = useState('');

    useEffect(()=>{
       const mydata = async () => {
        try {
            const response = await fetch(`${BASE_URL}/users/me`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            });
            const result = await response.json();
            console.log(result.data);
            setUserData(result.data)
        } catch (error) {

        }
    } 
    mydata()
    },[])
    
    return (<>
        {userData ? <>
            <div className="posts">
                <h1>Your Posts:</h1>
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
                            userData.posts.map((post) => {
                                return (
                                    <tr key={post._id}>
                                        <td>{post.title}</td>
                                        <td>{post.description}</td>
                                        <td>{post.price}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            <div className="messages">
                <h1>Your Messages:</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Original Post Id</th>
                                <th>Your Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userData.messages.map((message)=> {
                                    return (
                                        <tr key={message._id}>
                                            <td>{message.post.title}</td>
                                            <td>{message.post._id}</td>
                                            <td>{message.content}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>

            </div>
                
            </div>
        </>
            : <>
            </>}
    </>)
}