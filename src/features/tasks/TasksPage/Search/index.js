import { useLocation, useHistory } from "react-router-dom";
import Input from "../../Input";
import { Wrapper } from "./styled";
import searchQueryParamName from "../searchQueryParamName";
const Search = () => {
  const location = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);

  const onInputChange = ({ target }) => {
    const params = new URLSearchParams(location.search);
    if (!target.value || target.value === "") {
      params.delete(searchQueryParamName);
    } else {
      params.set(searchQueryParamName, target.value);
    }
    history.push(`${location.pathname}?${params.toString()}`);
  };

  return (
    <Wrapper>
      <Input
        placeholder="Filtruj zadania"
        value={query || ""}
        onChange={onInputChange}
      />
    </Wrapper>
  );
};

export default Search;
