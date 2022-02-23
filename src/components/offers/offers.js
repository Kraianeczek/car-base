import { useSelector } from "react-redux";
import Button from "../button/button";
import styles from './offers.module.scss'

const Offers = () => {
    
    const offers = useSelector(state => state.offers);
    console.log('log', offers);


    return(
        offers.map(offer =>
            <tr><td>{offer.make}</td><td>{offer.model}</td><td>{offer.engine}</td><td className={styles.availability}><span className={' fa ' + (offer.availability ? 'fa fa-check' : 'fa-times') + ' ' +(offer.availability ? styles.isTrue : styles.isFalse)}></span></td><td><Button></Button></td></tr>  
        )
    )
}

export default Offers;