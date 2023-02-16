import React from 'react'
import { Link } from 'react-router-dom'
import HeroImg from '../../assets/hero.jpeg'
import styles from './style.module.css'

const HeroBanner = () => {
  return (
    <div className={styles.heroBanner}>
      <img src={HeroImg} className={styles.heroBannerBg} />
      <div className={styles.heroBannerContent}>
        <h1>India's no. 1 Phone Booth station</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </p>
        <Link to='/login' className={styles.loginBtn}>
          Go to Login
        </Link>
      </div>
    </div>
  )
}

export default HeroBanner
