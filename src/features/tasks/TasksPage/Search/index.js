import { useLocation } from "react-router-dom";
import Input from "../../Input";
import { Wrapper } from "./styled";
const Search = () => {
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("szukaj");

  return (
    <Wrapper>
      <Input placeholder="Filtruj zadania" value={query} />
    </Wrapper>
  );
};

export default Search;
