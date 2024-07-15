import React, { useState } from 'react'
import styles from "./auth.module.scss"
import { Link, useNavigate } from 'react-router-dom'
import Card from '../../components/card/Card'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Loader from '../../components/loader/Loader'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase/config';

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cPassword, setCPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const registerUser = (e) => {
        e.preventDefault();
        if(password !== cPassword){
            toast.error("Passwords do not match");
        }
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          const user = userCredential.user;
          setIsLoading(false)
          toast.success("Registration Successful...")
          navigate("/login")
  })
      .catch((error) => {
          toast.error(error.message)
          setIsLoading(false)
  });
}
  return (
    <>
    <ToastContainer/>
    {isLoading && <Loader/>}
    <section className = {`container ${styles.auth}`}>
        
            <div className = {styles.form}>
                <h2 color='orangered'>Register</h2>
                <form onSubmit={registerUser}>
                    <input type = "email" placeholder="Email" required value ={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type = "password" placeholder="Password" required value ={password} onChange={(e) => setPassword(e.target.value)}/>
                    <input type = "password" placeholder="Confirm Password" required value ={cPassword} onChange={(e) => setCPassword(e.target.value)}/>

                    <button type="submit" className = "--btn --btn-danger --btn-block">Register</button>
                </form>
                <span className = {styles.register}>
                    <p>Already have an account?</p>
                    <Link to="/login">Login</Link>
                </span>
            </div>
        
    </section>
    </>
  )
}

export default Register
