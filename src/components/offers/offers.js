import { useDispatch, useSelector } from "react-redux";
import shortid from "shortid";
import { removeOffer, toggleButton } from "../../redux/offersRedux";
import styles from './offers.module.scss'

const Offers = () => {

  const dispatch = useDispatch();
  const offers = useSelector(state => state.offers);

  const handleSubmit = (offer) => {
    if (offer.availability === true) { offer.availability = false } else { offer.availability = true };
    dispatch(toggleButton(offer.availability));
  }

  const deleteSubmit = (offer) => {
    dispatch(removeOffer(offer));
  }

  return (
    offers.map(offer => 
      <tr className={(offer.availability ? styles.rowIsTrue : styles.rowIsFalse)} key={shortid()}>
        <td className={styles.text}>{offer.make}</td>
        <td className={styles.text}>{offer.model}</td>
        <td className={styles.text}>{offer.engine}</td>
        <td className={styles.availability}>
          <span className={styles.icon + ' baka fa ' + (offer.availability ? 'fa fa-check' : 'fa-times') + ' ' + (offer.availability ? styles.isTrue : styles.isFalse)}></span>
        </td>
        <td className={styles.buttons}><button onClick={() => handleSubmit(offer)} className={styles.button}>Change</button><button onClick={() => deleteSubmit(offer)} className={styles.button}>Delete</button></td>
      </tr>
    )
  )
}

export default Offers;