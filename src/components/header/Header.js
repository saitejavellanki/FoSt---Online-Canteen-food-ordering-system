import React, { useEffect, useState } from 'react'
import styles from "./Header.module.scss"
import {FaShoppingCart, FaUserCircle} from "react-icons/fa"
import { Link, NavLink, useNavigate } from 'react-router-dom'
//import ShowOnLogin, { ShowOnLogout } from '../hiddenLink/hiddenLink'
//import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from '../../redux/slice/authSlice'
import {useDispatch} from "react-redux"
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../../firebase/config'
import { toast } from 'react-toastify'

const logo = (
    <div className={styles.logo}>
    <Link to="/">
      <h2>
        Fo<span>St</span>.
      </h2>
    </Link>
              
    </div>
    )


const cart = (
        <span className={styles.cart}>
                  <Link to="/cart">
                    Cart
                    <FaShoppingCart size={20}/>
                    <p>0</p>
                  </Link>
                  </span>
      )
           
const activeLink = ({ isActive}) => (isActive ? `${styles.active}` : "")

const Header = () => {


  
  const navigate = useNavigate


  //Mopnitor signed in user
  /*
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user)
         //const uid = user.uid;
         //console.log(user.displayName)
        if(user.displayName == null){
          const u1 = user.email.substring(0, user.email.indexOf("@"))
          const uName = u1.charAt(0).toUpperCase() + u1.slice(1)
          setdisplayName(uName)
        }else{
          setdisplayName(user.displayName)
        }

       

        dispatch(SET_ACTIVE_USER({
          email: user.email,
          userName: user.displayName ? user.displayName : displayName,
          userID: user.uid,
        }))
        
      } else {
        setdisplayName("")
        dispatch(REMOVE_ACTIVE_USER())
      }
    });
    
  }, [dispatch, displayName]) */

  const logoutUser = () => {
    signOut(auth).then(() => {
      toast.success("Logout Successful...")
      navigate("/")
    }).catch((error) => {
      toast.error(error.message)
    });
  }

  return (
    <header>
        <div className={styles.header}>
        {logo}
        <nav>
            <ul>
               <li>
                <Link to="/">
                Home
                </Link>
               </li>
               <li>
                <Link to="/contact">
                Contact Us
                </Link>
               </li>
            </ul>
            <div className={styles["header-right"]}>
            <span className={styles.links}>
            
            <NavLink to="/login" className={activeLink}>Login</NavLink>
            
            
                <NavLink to="/register" className={activeLink}>Register</NavLink>
                <Link>Order-history</Link>
                <NavLink to="/" onClick={logoutUser}>Logout</NavLink>
            </span>
            {cart}
            </div>
        </nav>
        </div>
    </header>
  )
}

export default Header
