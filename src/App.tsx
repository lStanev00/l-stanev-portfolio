import styles from './App.module.css';
import Banner from './componenets/banner/Banner';
import ContectMe from './componenets/contact/ContactMe';
import CoreWrapper from './componenets/core-wrapper/CoreWrapper';
import SEO from './SEO/SEO';

function App() {
    return (
        <SEO>

            <main className={styles.main}>
                <Banner />
                <CoreWrapper />
                <ContectMe />
            </main>

        </SEO>
    );
}

export default App;
