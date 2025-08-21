import styles from './App.module.css';
import Banner from './componenets/banner/Banner';
import CoreWrapper from './componenets/core-wrapper/CoreWrapper';

function App() {
    return (
        <main className={styles.main}>
            <Banner />
            <CoreWrapper />

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
