import styles from "./projects.module.css"
import PvPScalpel from "./PvP-Scalpel/PvPScalpel"
import ShopifyWidget from "./shopify-widget/ShopifyWidget"
export default function Projects() {

    const projectsArr = [
        ShopifyWidget,
        PvPScalpel
    ]

    return (
        <div className={styles.projects}>
            <h2>Projects</h2>

            {projectsArr && projectsArr.map((Component, index) => (<Component key={index} />))}
        </div>
    )
}