import logo from "./logo.svg";
import "./App.css";
import Register from "./Components/Register/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/register" component={Register} />
        </Routes>
      </BrowserRouter> */}
      <Register />
    </>
  );
}

export default App;
