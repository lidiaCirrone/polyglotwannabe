// styles
import styles from './ui.module.css'

export default function Container({ children }) {
   return (
      <div className={styles.container}>{children}</div>
   )
}