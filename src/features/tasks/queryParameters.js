import { useLocation, useHistory } from "react-router-dom";
export const useQueryParameter = (param) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get(param);
  return query;
};
export const useReplaceQueryParameter = () => {
  const location = useLocation();
  const history = useHistory();

  const params = new URLSearchParams(location.search);

  const replaceQueryParameter = ({ key, value }) => {
    if (!value) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    return history.push(`${location.pathname}?${params.toString()}`);
  };
  return replaceQueryParameter;
};
