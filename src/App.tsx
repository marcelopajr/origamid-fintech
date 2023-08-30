import { DataContextProvider } from "./contexts/DataContext";
import Resumo from "./pages/resumo";
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
        </main>
      </div>
    </DataContextProvider>
  );
}

export default App;
