import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Main from "./components/main/main";
import { fetchOffers } from "./redux/offersRedux";

function App() {

  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchOffers()), [dispatch]);
  
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
