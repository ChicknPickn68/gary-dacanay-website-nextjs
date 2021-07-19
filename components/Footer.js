import styles from "./Footer.module.css"

export default function Footer({children}) {
    return (
        <div className={styles.footer}>
            {children}
        </div>
    )
}