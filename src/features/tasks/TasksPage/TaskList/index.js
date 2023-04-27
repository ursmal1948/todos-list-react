import { Link, useLocation } from "react-router-dom";
import { List, Item, Content, Button } from "./styled";
import {
  removeTask,
  selectHideDone,
  selectTasksByQuery,
  toggleTaskDone,
} from "../../tasksSlice";
import { useSelector, useDispatch } from "react-redux";

const TaskList = () => {
  const location = useLocation();

  const params = new URLSearchParams(location.search);

  const query = params.get("szukaj");

  const hideDone = useSelector(selectHideDone);
  const tasks = useSelector((state) => selectTasksByQuery(state, query));
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <Button done onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✔" : ""}
          </Button>
          <Content done={task.done}>
            <Link to={`/zadania/${task.id}`}>{task.content}</Link>
          </Content>
          <Button onClick={() => dispatch(removeTask(task.id))} remove>
            🗑
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;
