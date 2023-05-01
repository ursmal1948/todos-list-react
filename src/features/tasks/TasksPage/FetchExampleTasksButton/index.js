import { useDispatch, useSelector } from "react-redux";
import Button from "../Button";
import { fetchExampleTasks } from "../../tasksSlice";
import { selectLoading } from "../../tasksSlice";
const FetchExampleTasksButton = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  return (
    <Button disabled={loading} onClick={() => dispatch(fetchExampleTasks())}>
      {
      loading
       ?  "Ładowanie..." 
       : "Pobierz przykładowe zadania"
       }
    </Button>
  );
};
export default FetchExampleTasksButton;
