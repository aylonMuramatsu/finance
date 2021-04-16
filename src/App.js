import logo from "./logo.svg";
import "./styles/sass/global.scss";
import Layout from "./components/Layout";
import { GlobalProvider } from "./context/global";

function App() {
  return (
    <GlobalProvider>
      <Layout />
    </GlobalProvider>
  );
}

export default App;
