import React, { useState } from 'react'

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cPassword, setCPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)

  return (
    <section className = {`container ${styles.auth}`}>
        <Card>
            <ToastContainer/>
            <div className = {styles.form}>
                <h2>Register</h2>
                <form onSubmit={registerUser}>
                    <input type = "email" placeholder="Email" required value ={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type = "password" placeholder="Password" required value ={password} onChange={(e) => setPassword(e.target.value)}/>
                    <input type = "password" placeholder="Confirm Password" required value ={cPassword} onChange={(e) => setCPassword(e.target.value)}/>

                    <button type="submit" className = "--btn --btn-primary --btn-block">Login</button>
                </form>
                <span>
                    <p>Already have an account?</p>
                    <Link to="/login">Login</Link>
                </span>
            </div>
        </Card>
    </section>
  )
}

export default Register
