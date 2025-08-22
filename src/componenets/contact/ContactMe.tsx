import styles from "./ContactMe.module.css"
export default function ContectMe() {
    return (

        <section className={styles.contactSection}>
            <h2 className={styles.contactTitle}>Contact</h2>
            <p className={styles.contactText}>
                Email: <a href="mailto:l.stanev2000@gmail.com">l.stanev2000@gmail.com</a>
            </p>
            <p className={styles.contactText}>
                Phone: <a href="tel:+359898844033">+359 (0) 89 884 4033</a>
            </p>
        </section>

    )
}