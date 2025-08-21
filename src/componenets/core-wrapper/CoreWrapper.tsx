import {useState } from "react"
import styles from "./CoreWrapper.module.css"
import Projects from "../projects/Projects";
import Qualifications from "../qualifications/Qualifications";
export default function CoreWrapper() {

    const ChildrenArr= [
        Projects,
        Qualifications
    ]

    const [viewIndex, setViewIndex] = useState<number>(0);
    const ComponentInView = ChildrenArr[viewIndex]

    return(
    <section className={styles.mainSection}>

        {ChildrenArr && ChildrenArr.map((Element, i) => (
            <button 
                key={Element.getName() + i}
                onClick={() => setViewIndex(i)}
            >
                    {Element.getName()}
            </button>
            ))}

        <ComponentInView />
    </section>
    )

}   