import React, { useState } from 'react'
import axios from "axios";
import { useHistory,Link } from "react-router-dom";

export default function Registration() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const register = () => {
        axios.post("/api/user/register", {
            name: username,
            email: email,
            password: password
        })
            .then((response) => {
                console.log(response.data);
                history.push('/');
            })

            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>

            <div className="registration">
                <p>Registration</p>
                <input className="margin20 search-input" type="text" placeholder="Username..."
                    onChange={(event) => { setUsername(event.target.value); }}
                />
                <input className="margin20 search-input" type="email" placeholder="Email..."
                    onChange={(event) => { setEmail(event.target.value); }}
                />
                <input className="margin20 search-input" type="password" placeholder="Password..."
                    onChange={(event) => { setPassword(event.target.value); }}
                />

            </div>
            <div>

                <button className="margin20" onClick={register}>Register</button>
                <Link to="/"><button className="margin20">Go back</button></Link>
            </div>
        </div>
    )
}
