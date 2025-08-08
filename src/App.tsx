import styles from './App.module.css';
import Banner from './componenets/banner/Banner';
import Projects from './componenets/projects/Projects';
import Qualifications from './componenets/qualifications/Qualifications';

function App() {
    return (
        <main className={styles.main}>
            <Banner />
            <Projects />
            <Qualifications />

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
