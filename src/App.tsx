import styles from './App.module.css';

function App() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Lachezar Stanev</h1>
            <p>Full-stack Developer | JavaScript | React | Node.js</p>

            <section className={styles.section}>
                <h2>Projects</h2>
                <ul>
                    <li>
                        <strong>PvP Scalpel</strong> — WoW PvP tracker<br />
                        <a className={styles.link} href="https://pvpscalpel.com" target="_blank">Live Site</a> |{' '}
                        <a className={styles.link} href="https://github.com/lStanev00/WoW-Guild-Page">GitHub</a>
                    </li>
                    <li>
                        <strong>Daniela Staneva</strong> — Kindergarten teacher secured portfolio website
                    </li>
                </ul>
            </section>

            <section className={styles.section}>
                <h2>Contact</h2>
                <p>
                    Email: <a href="mailto:l.stanev2000@gmail.com">l.stanev2000@gmail.com</a>
                </p>

            </section>
        </main>
    );
}

export default App;
