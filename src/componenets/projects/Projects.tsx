import styles from "./projects.module.css"
import ShopifyWidget from "./shopify-widget/ShopifyWidget"
export default function Projects() {

    const projectsArr = [
        ShopifyWidget
    ]

    return (
        <div className={styles.projects}>
            <h2>Projects</h2>

            {projectsArr && projectsArr.map((Component, index) => (<Component key={index} />))}
        </div>
    )
}