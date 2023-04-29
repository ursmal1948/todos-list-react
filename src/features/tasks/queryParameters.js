import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

export const useQueryParameter = (param) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get(param);
  return query;
};
