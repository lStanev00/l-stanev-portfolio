import styles from './App.module.css';
import Banner from './componenets/banner';

function App() {
    return (
        <main className={styles.main}>

            <Banner />
            <section style={{
                marginTop: "5%"
            }} className={styles.section}>
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
