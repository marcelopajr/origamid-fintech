import Header from "./components/Header";
import Sidenav from "./components/Sidenav";
import Resumo from "./pages/resumo";

import "./style.css";

function App() {
  return (
    <div>
      <Sidenav />
      <main>
        <Header />
        <Resumo />
      </main>
    </div>
  );
}

export default App;
