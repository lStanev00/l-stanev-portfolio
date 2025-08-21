import { ReactNode } from "react"
import styles from "./CoreWrapper.module.css"

type Props = {
    children: ReactNode,
    components : string[]
}

export default function CoreWrapper({children, components}:Props) {

    return(
    <section className={styles.mainSection}>

        {components && components.map(elementName => (<button>{elementName}</button>))}



        {children}
    </section>)

}