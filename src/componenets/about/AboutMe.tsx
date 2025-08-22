import styles from "./AboutMe.module.css";

export default function AboutMe() {
    return (
        <section className={styles.aboutSection}>
            <h1 className={styles.aboutTitle}>About Me</h1>
            <p className={styles.aboutText}>
                I’m a passionate full-stack developer who loves creating clean, secure, and impactful web
                applications. My goal is not just to build code, but to deliver solutions that bring value and
                make a difference.
            </p>
            <p className={styles.aboutText}>
                If you’re looking for someone who is dedicated, detail-oriented, and excited to take on new
                challenges, I’d love to hear from you. Let’s turn your ideas into reality!
            </p>

            <div className={styles.ctaButtons}>
                <a
                    href="mailto:l.stanev2000@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Mail Me
                </a>
                Or
                <a
                    href="tel:+359898844033"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Call Me
                </a>
                {/* <a
                    href="/Luchezar_Stanev_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View My CV
                </a> */}
            </div>
        </section>
    );
}

AboutMe.getName = () => "About";
