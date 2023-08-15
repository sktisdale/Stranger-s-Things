import { useState } from "react";

export default function Login({setToken, setUser}){
    const COHORT_NAME = '2305-FTB-MT-WEB-PT'
    const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`${BASE_URL}/users/login`, {
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
              setToken(result.data.token);
              localStorage.setItem("token", result.data.token);
              setUser(username)
              localStorage.setItem("username", username)
        } catch (error) {
            
        }
    }

    return(<>
        <form onSubmit={login}>
            <input type="text" className="username" placeholder="Username" value={username} onChange={(event)=>{setUsername(event.target.value)}}/>
            <input type="password" className="password" placeholder="Password" value={password} onChange={(event)=>{setPassword(event.target.value)}} />
            <input type="submit" name="submit" id="submit" value="Log In" />
        </form>
    </>)
}