import { Provider } from "react-redux";
import "./App.css";
import BookingRow from "./components/BookingRow";
import InputData from "./components/InputData";
import TableHead from "./components/TableHead";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <header id="header">
        <div class="container">
          <img src="./img/lws-logo.svg" alt="logo" class="logo" />
          <div class="flex items-center">
            <a class="text-white min-w-[50px] font-medium" href="#">
              Home
            </a>
            <button class="log-btn btn">Login</button>
          </div>
        </div>
      </header>

      <section>
        {/* <!-- Input Data --> */}
        <InputData />

        {/* <!-- Preview Data --> */}
        <TableHead />
      </section>
    </Provider>
  );
}

export default App;
