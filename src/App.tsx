import { DataContextProvider } from "./contexts/DataContext";
import Resumo from "./pages/resumo";
import Vendas from "./pages/vendas";
import Header from "./components/Header";
import Sidenav from "./components/Sidenav";

import "./style.css";

function App() {
  return (
    <DataContextProvider>
      <div className="container">
        <Sidenav />
        <main>
          <Header />
          <Resumo />
          <Vendas />
        </main>
      </div>
    </DataContextProvider>
  );
}

export default App;
