import { useSelector } from "react-redux";

const Offers = () => {
    
    const offers = useSelector(state => state.offers);
    console.log('of', offers);

    return(
        offers.map(offer =>
            <tr><td>{offer.make}</td><td>{offer.model}</td><td>{offer.engine}</td><td>{offer.availability}</td><td></td></tr>  
        )
    )
}

export default Offers;