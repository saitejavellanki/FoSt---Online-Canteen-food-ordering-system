import React from 'react'
import styles from "./Contact.module.scss"
import Card from '../../components/card/Card'

const Contact = () => {
  return (
    <section className={`container ${styles.auth}`}>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.5747762902115!2d80.49662157520197!3d16.497055384246142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f27d40f21c55%3A0x1490eacd54859850!2sVIT-AP%20University!5e0!3m2!1sen!2sin!4v1719938447324!5m2!1sen!2sin"></iframe>
        <Card>
          <h2 >Contact US</h2>
          <div className={styles.form}>
          <form action="https://formspree.io/f/mnnaqvwz" method="POST"> 
            <input type="text" placeholder="User Name" name="Username" required autoComplete="off"/>
            <input type="email" placeholder="Email" name="Email" required autoComplete="off"/>
            <textarea name="Message" placeholder='Enter '></textarea>
            <input type="submit" value="send" className="--btn --btn-danger"/>
          </form>
          </div>
        </Card>
    </section>
  )
}

export default Contact
