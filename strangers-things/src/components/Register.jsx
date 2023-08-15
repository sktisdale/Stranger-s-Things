import { useState } from "react";

export default function Register({setToken, setUser}){
    const COHORT_NAME = '2305-FTB-MT-WEB-PT'
    const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const register = async (event) => {
        event.preventDefault()
        try {
            const response = await fetch(`${BASE_URL}/users/register`, {
                method: "POST",
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  user: {
                    username: username,
                    password: password
                  }
                })
              });
              const result = await response.json();
              console.log(result);
              if (result.success){
                setToken(result.data.token);
                setUser(username)
              }     
        } catch (error) {
            
        }
    }

    return(<>
        <form onSubmit={register}>
            <input type="text" className="username" placeholder="Username" value={username} onChange={(event)=>{setUsername(event.target.value)}}/>
            <input type="password" className="password" placeholder="Password" value={password} onChange={(event)=>{setPassword(event.target.value)}} />
            <input type="submit" name="submit" id="submit" value="Sign Up" />
        </form>
    </>)
}