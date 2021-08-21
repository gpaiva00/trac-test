import React, { FC, useEffect } from "react"
import styles from '../../styles/Player.module.css'

const Player: FC = () => {
  
  useEffect(() => {
    const audio = new Audio('/parabains.mp3')
    audio.play()
  },[])

  return (
   <video className={styles.player} autoPlay loop muted>
     <source src="/parabains.mp4" type="video/mp4"/>
     Your browser does not support the video tag.
   </video>
)}

export default Player