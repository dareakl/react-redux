import "./App.css";
// import PizzaBox from "./components/PizzaBox";
import { Provider } from "react-redux";
import store from "./components/redux/store";
import HookContainer from "./components/HooksContainer";

function App() {
  return (
    <Provider store={store}>
      {/* <PizzaBox /> */}
      <HookContainer />
    </Provider>
  );
}

export default App;
