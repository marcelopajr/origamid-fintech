import { useData } from "../contexts/DataContext";

function Header() {
  const { data } = useData();

  console.log(data);

  return <div>Header</div>;
}

export default Header;
