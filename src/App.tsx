import styles from './App.module.css';
import Banner from './componenets/banner/Banner';
import ContectMe from './componenets/contact/ContactMe';
import CoreWrapper from './componenets/core-wrapper/CoreWrapper';

function App() {
    return (
        <main className={styles.main}>
            <Banner />
            <CoreWrapper />
            <ContectMe />
        </main>
    );
}

export default App;
