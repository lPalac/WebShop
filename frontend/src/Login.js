import React, { useState } from 'react'
import axios from "axios";
import { useHistory, Link } from "react-router-dom";

export default function Login() {
    const history = useHistory();

    const [emailLog, setEmailLog] = useState("");
    const [passwordLog, setPasswordLog] = useState("");

    const login = () => {
        axios.post("/api/user/login", {
            email: emailLog,
            password: passwordLog,
        })
            .then(() => {
                history.push('/shop');

            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <div className="login">
                <p>Login</p>
                <input
                    type="text" className="margin20 search-input" placeholder="Email..."
                    onChange={(event) => { setEmailLog(event.target.value); }}

                />
                <input type="password" className="margin20 search-input"  placeholder="Password..."
                    onChange={(event) => { setPasswordLog(event.target.value); }}
                />
            </div>
            <div>
                <button className="margin20 "onClick={login}>Login</button>
                <Link to="/registration">
                    <button className="margin20">Registriraj se</button>
                </Link>
            </div>
        </div>
    )
}
