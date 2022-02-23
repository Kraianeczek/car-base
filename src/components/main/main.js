import Offers from "../offers/offers";

const Main = () => {
    return(
        <table>
            <tr><th>Make</th><th>Model</th><th>Engine</th><th>Availability</th><th>Actions</th></tr>
            <Offers />
        </table>
    )
}

export default Main;