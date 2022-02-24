import Offers from "../offers/offers";
import styles from './main.module.scss'

const Main = () => {
  return (
    <table className={styles.table}>
      <tbody>
        <tr>
          <th className={styles.head1 + ' ' + styles.header}>Make</th>
          <th className={styles.head2 + ' ' + styles.header}>Model</th>
          <th className={styles.head2 + ' ' + styles.header}>Engine</th>
          <th className={styles.head2 + ' ' + styles.header}>Availability</th>
          <th className={styles.head2 + ' ' + styles.header}>Actions</th>
        </tr>
        <Offers />
      </tbody>
    </table>
  )
}

export default Main;