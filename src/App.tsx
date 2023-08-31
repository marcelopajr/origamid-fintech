import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DataContextProvider } from "./contexts/DataContext";
import Resumo from "./pages/resumo";
import Vendas from "./pages/vendas";
import Venda from "./pages/venda";
import Header from "./components/Header";
import Sidenav from "./components/Sidenav";

import "./style.css";

function App() {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <div className="container">
          <Sidenav />
          <main>
            <Header />
            <Routes>
              <Route path="/" element={<Resumo />} />
              <Route path="/vendas" element={<Vendas />} />
              <Route path="/vendas/id" element={<Venda />} />
            </Routes>
          </main>
        </div>
      </DataContextProvider>
    </BrowserRouter>
  );
}

export default App;
