import { useData } from "../contexts/DataContext";

function Resumo() {
  const { data } = useData();

  console.log(data);

  return <div>Resumo</div>;
}

export default Resumo;
