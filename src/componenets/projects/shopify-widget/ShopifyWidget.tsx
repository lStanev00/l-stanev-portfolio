import styles from "../ProjectStyle.module.css"
export default function ShopifyWidget () {

    return(
            <div className={styles.projectSection}>
                <span className={styles.projectTitle}>Shopify Cart Widget & Product Page</span>
                <div className={styles.projectBody}>

                    <div className={styles.projectDescription}>
                        <p>
                            This project features a custom-built Shopify product page with a dynamic cart widget, star-based review system, and user ratings. Built using vanilla JavaScript, React, Express, and Liquid, the solution enhances the Shopify storefront by combining modern interactivity with native Shopify theming.
                        </p>

                        <ul>
                            <li>Seamless cart widget integration that updates in real-time</li>
                            <li>Clean, responsive product layout with rating and review UI</li>
                            <li>Shopify-compatible templating via Liquid</li>
                            <li>Fully stylized using vanilla CSS</li>
                        </ul>

                        <p>Ideal for store owners who want to boost conversions with a richer product experience while maintaining flexibility across custom storefronts.</p>
                    </div>

                    <video
                        src="/video/shopify-widget.mp4"
                        controls
                        className={styles.videoWidget}
                    />

                </div>
            </div>
    )
}