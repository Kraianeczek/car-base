import { useSelector } from "react-redux";
import Button from "../button/button";
import styles from './offers.module.scss'

const Offers = () => {
    
    const offers = useSelector(state => state.offers);
    console.log('log', offers);

    const handleSubmit = e => {
        e.preventDefault();
    }

    return(
        offers.map(offer =>
            <tr className={(offer.availability ? styles.rowIsTrue : styles.rowIsFalse)}>
                <td className={styles.text}>{offer.make}</td>
                <td className={styles.text}>{offer.model}</td>
                <td className={styles.text}>{offer.engine}</td>
                <td className={styles.availability}>
                    <span className={' fa ' + (offer.availability ? 'fa fa-check' : 'fa-times') + ' ' +(offer.availability ? styles.isTrue : styles.isFalse)}></span>
                </td>
                <td><Button onClick={handleSubmit}></Button></td></tr>  
        )
    )
}

export default Offers;