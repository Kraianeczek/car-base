import { useDispatch, useSelector } from "react-redux";
import { toggleButton } from "../../redux/offersRedux";
import styles from './offers.module.scss'

const Offers = () => {
    
    const dispatch = useDispatch();
    const offers = useSelector(state => state.offers);
    console.log('log', offers);

    const handleSubmit = (offer) => {
        console.log('ziem');
        if(offer.availability === true) {offer.availability = false} else {offer.availability = true};
        dispatch(toggleButton(offer.availability));
    }

    return(
        offers.map(offer =>
            <tr className={(offer.availability ? styles.rowIsTrue : styles.rowIsFalse)}>
                <td className={styles.text}>{offer.make}</td>
                <td className={styles.text}>{offer.model}</td>
                <td className={styles.text}>{offer.engine}</td>
                <td className={styles.availability}>
                    <span className={styles.icon + ' baka fa ' + (offer.availability ? 'fa fa-check' : 'fa-times') + ' ' + (offer.availability ? styles.isTrue : styles.isFalse)}></span>
                </td>
                <td><button onClick={() => handleSubmit(offer)}>change</button></td></tr>  
        )
    )
}

export default Offers;