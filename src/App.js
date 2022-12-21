import "./App.css";
import { Home } from "./pages/home";
import { CurrenciesState } from "./context/currencies/currencies-state";
function App() {

 return (
    <CurrenciesState>
      <Home />
    </CurrenciesState>
  );
}

export default App;
