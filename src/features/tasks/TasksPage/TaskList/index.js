// import { Link, useLocation } from "react-router-dom";
import { List, Item, Content, Button, StyledNavLink } from "./styled";
import {
  removeTask,
  selectHideDone,
  selectTasks,
  toggleTaskDone,
} from "../../tasksSlice";
import { useSelector, useDispatch } from "react-redux";

const TaskList = () => {
  const dispatch = useDispatch();
  const hideDone = useSelector(selectHideDone);

  const tasks = useSelector(selectTasks);

  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <Button done onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✔" : ""}
          </Button>
          <Content done={task.done}>
            {/* <StyledNavLink to={`/zadania/${task.id}`}>{task.content}</StyledNavLink> */}
            {task.content}
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
