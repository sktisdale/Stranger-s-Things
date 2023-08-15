import { useState } from "react";

export default function Login({token, setToken}){
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
              console.log(result);
              setToken(result.data.token)
        } catch (error) {
            
        }
    }

    return(<>
        <form onSubmit={login}>
            <input type="text" className="username" placeholder="Username" value={username} onChange={(event)=>{setUsername(event)}}/>
            <input type="password" className="password" placeholder="Password" value={password} onChange={(event)=>{setPassword(event)}} />
            <input type="submit" name="submit" id="submit" value="Log In" />
        </form>
    </>)
}