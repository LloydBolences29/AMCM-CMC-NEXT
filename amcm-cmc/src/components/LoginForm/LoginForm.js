"use client";
import { useState } from "react";
import styles from "./LoginForm.module.css";

const LoginForm = () =>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () =>{
        
        window.alert(`Login as ${username} with password: ${password}`);
    }

    const handleUsernameChange = (e) =>{
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e) =>{
        setPassword(e.target.value);
    }
    return (
        
        <div className={styles["login-container"]}>
      <div className={styles["login-form"]}>
        <div className={styles["login-title"]}>
          <h1>Login</h1>
        </div>
        <form>
          <div className={styles["form-group"]}>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" value={username} onChange={handleUsernameChange} required />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} required />
          </div>
          <div className={styles["login-btn-container"]}>
            <button className={styles["login-btn"]} type="submit" onClick={handleLogin}>Login</button>
          </div>
        </form>
      </div>
    </div>
    
    )
}

export default LoginForm;