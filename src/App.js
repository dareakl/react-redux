import "./App.css";
import PizzaBox from "./components/PizzaBox";
import { Provider } from "react-redux";
import store from "./components/redux/store";
// import HookContainer from "./components/HooksContainer";
import BurgerBox from "./components/BurgerBox";

function App() {
  return (
    <Provider store={store}>
      <PizzaBox />
      <BurgerBox />
      {/* <HookContainer /> */}
    </Provider>
  );
}

export default App;
