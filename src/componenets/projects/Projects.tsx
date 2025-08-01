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
            <h2>Projects</h2>

            <div>
                {projectsArr.map((_, index) => (
                    <button key={index} onClick={() => setViewIndex(index)}>
                        Show project {index + 1}
                    </button>
                ))}
            </div>

            <ComponentInView />
        </div>
    )
}