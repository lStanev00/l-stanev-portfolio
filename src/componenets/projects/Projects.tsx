import { useState } from "react"
import styles from "./projects.module.css"
import PvPScalpel from "./PvP-Scalpel/PvPScalpel"
import ShopifyWidget from "./shopify-widget/ShopifyWidget"

export default function Projects() {
    const projectsArr = [
        ShopifyWidget,
        PvPScalpel
    ]

    const [viewIndex, setViewIndex] = useState(0)
    const ComponentInView = projectsArr[viewIndex]

    return (
        <div className={styles.projects}>

            <div className={styles.buttonsWrapper}>
                {projectsArr.map((_, index) => (
                    <button  
                        className={`${styles.button} ${viewIndex === index ? styles.active : ""}`}
                        key={index}
                        onClick={() => setViewIndex(index)}>
                        {_.getName()}
                    </button>
                ))}
            </div>

            <ComponentInView />
        </div>
    )
}

Projects.getName = () => "Public Projects"