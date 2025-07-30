import styles from "./projects.module.css"
export default function Projects() {
    return (
        <div className={styles.projects}>
            <h2>Projects</h2>
            <div className={styles.projectSection}>
                <span className={styles.projectTitle}>Shopify Widget</span>
                <video
                    src="/video/shopify-widget.mp4"
                    controls
                    className={styles.videoWidget}
                />
            </div>
        </div>
    )
}