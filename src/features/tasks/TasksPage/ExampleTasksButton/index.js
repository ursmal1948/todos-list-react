import { useDispatch, useSelector } from "react-redux";
import Button from "../../Button/styled";
import { fetchExampleTasks } from "../../tasksSlice";
import { selectLoading } from "../../tasksSlice";
const ExampleTasksButton = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  return (
    <Button disabled={isLoading} onClick={() => dispatch(fetchExampleTasks())}>
      {!isLoading ? "Pobierz przykładowe zadania" : "Ładowanie..."}
    </Button>
  );
};
export default ExampleTasksButton;
