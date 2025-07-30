import styles from "./banner.module.css"
export default function Banner () {
    return (
    <div className={styles.banner}>

            <div className={styles.heroTitle}>

                <h1 className={styles.title}>Lachezar Stanev</h1>
                <p className={styles.coTitle}>Full-stack Developer</p>

            </div>

            
            <div className={styles.pictureDiv}>

                <img className={styles.techStack} src='/tech-ico/static.png' alt='Tech Stack Picture' />
                <img className={styles.profilePic} src="/pictures/me.jpg" alt="Lachezar Stanev Picture" />

            </div>
            

    </div>
    )
}