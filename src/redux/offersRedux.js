const createActionName = actionName => `app/offers/${actionName}`;
const UPLOAD_OFFERS = createActionName('UPLOAD_OFFERS');
const TOGGLE_BUTTON = createActionName('UPLOAD_BUTTON');

export const toggleButton = payload => ({ type: TOGGLE_BUTTON, payload })
export const uploadOffers = payload => ({ type: UPLOAD_OFFERS, payload });
const url = "http://localhost:3131/api/offers";
export const fetchOffers = () => {
    return(dispatch) => {
        fetch(url)
            .then(res => res.json())
            .then(offers => dispatch(uploadOffers(offers)))
    }
};

const offersReducer = (statePart = [], action) => {
    switch (action.type) {
        case UPLOAD_OFFERS:
            return [...action.payload];
        case TOGGLE_BUTTON:
            return statePart.map(toggle => (toggle.id === action.payload) ? {...toggle, availability: !toggle.availability} : toggle) ;
        default:
            return statePart;
    };
};

export default offersReducer;