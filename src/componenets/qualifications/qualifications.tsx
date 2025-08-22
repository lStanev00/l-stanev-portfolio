import styles from './Qualifications.module.css';

export default function Qualifications() {
    return (<div className={styles.qualificationsSection}>
        <h1>Qualifications</h1>

        <ul className={styles.qualificationsList}>
            <li><a href="https://softuni.bg/certificates/details/241570/f66ef847" target="_blank" rel="noopener noreferrer">ReactJS - February 2025</a></li>
            <li><a href="https://softuni.bg/certificates/details/237758/f31e5bf2" target="_blank" rel="noopener noreferrer">JS Back-End - January 2025</a></li>
            <li><a href="https://softuni.bg/certificates/details/241683/9031d8a8" target="_blank" rel="noopener noreferrer">IT Career Booster - February 2025</a></li>
            <li><a href="https://softuni.bg/certificates/details/231933/3e46d2a5" target="_blank" rel="noopener noreferrer">JS Applications - October 2024</a></li>
            <li><a href="https://softuni.bg/certificates/details/227920/63f320e1" target="_blank" rel="noopener noreferrer">JS Advanced - September 2024</a></li>
            <li><a href="https://softuni.bg/certificates/details/222082/c1ad0126" target="_blank" rel="noopener noreferrer">Programming Fundamentals - May 2024</a></li>
            <li><a href="https://softuni.bg/certificates/details/208576/0c55d867" target="_blank" rel="noopener noreferrer">Programming Basics - February 2024</a></li>
        </ul>

    </div>
    )
}

Qualifications.getName = () => "Qualifications"
