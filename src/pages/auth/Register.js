import React, { useState } from 'react'
import styles from "./auth.module.scss"
import { Link, useNavigate } from 'react-router-dom'
import Card from '../../components/card/Card'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {auth} from "../../firebase/config"
import Loader from '../../components/loader/Loader'

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cPassword, setCPassword] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    const navigate = useNavigate()

    const registerUser = (e) => {
        e.preventDefault();
//         if(password !== cPassword){
//             toast.error("Passwords do not match");
//         }
//         setIsLoading(true)
//         createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//           const user = userCredential.user;
//           setIsLoading(false)
//           toast.success("Registration Successful...")
//           navigate("/login")
//   })
//       .catch((error) => {
//           toast.error(error.message)
//           setIsLoading(false)
//   });
}
  return (
    <>
    <ToastContainer/>
    {isLoading && <Loader/>}
    <section className = {`container ${styles.auth}`}>
        <Card>
            <div className = {styles.form}>
                <h2 color='orangered'>Register</h2>
                <form onSubmit={registerUser}>
                    <input type = "email" placeholder="Email" required value ={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type = "password" placeholder="Password" required value ={password} onChange={(e) => setPassword(e.target.value)}/>
                    <input type = "password" placeholder="Confirm Password" required value ={cPassword} onChange={(e) => setCPassword(e.target.value)}/>

                    <button type="submit" className = "--btn --btn-danger --btn-block">Login</button>
                </form>
                <span className = {styles.register}>
                    <p>Already have an account?</p>
                    <Link to="/login">Login</Link>
                </span>
            </div>
        </Card>
    </section>
    </>
  )
}

export default Register
