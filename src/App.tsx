import styles from './App.module.css';
import Banner from './componenets/banner/Banner';
import CoreWrapper from './componenets/core-wrapper/CoreWrapper';
import Projects from './componenets/projects/Projects';
import Qualifications from './componenets/qualifications/Qualifications';

function App() {

    const components = [
        Projects.getName(),
        Qualifications.getName()
    ]

    return (
        <main className={styles.main}>
            <Banner />
            <CoreWrapper components={components}>

                <Projects />
                <Qualifications />

            </CoreWrapper>

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
