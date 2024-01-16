'use client' 
 
 import styles from './page.module.css'

 export default function valenpage() {
  const mudarCor = () => {
      document.getElementById("name")?.classList.add(styles.valentinnecolorname1)
  }

  return (
    <div>
      <h1 onClick={() => mudarCor()} id="name" className={styles.valentinnecolorname}>valen page</h1>
    </div>
  )
} 