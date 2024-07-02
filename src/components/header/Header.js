import React from 'react'
import styles from "./Header.module.scss"
import {FaShoppingCart} from "react-icons/fa"
import { Link } from 'react-router-dom'


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
                  

const Header = () => {
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
            </ul>
            <div className={styles["header-right"]}>
            <span className={styles.links}>
                <Link>Login</Link>
                <Link>Register</Link>
                <Link>Order-history</Link>

            </span>
            {cart}
            </div>
        </nav>
        </div>
    </header>
  )
}

export default Header
