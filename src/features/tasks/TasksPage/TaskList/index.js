import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { List, Item, Content, Button, StyledNavLink } from "./styled";
import {
  removeTask,
  selectHideDone,
  toggleTaskDone,
  selectTasksByQuery,
} from "../../tasksSlice";
import searchQueryParamName from "../searchQueryParamName";
import { toTask } from "../../../../routes";

const TaskList = () => {
  const hideDone = useSelector(selectHideDone);
  const dispatch = useDispatch();
  const location = useLocation();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);

  const tasks = useSelector((state) => selectTasksByQuery(state, query));

  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <Button done onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✔" : ""}
          </Button>
          <Content done={task.done}>
            <StyledNavLink to={toTask({ id: task.id })}>
              {task.content}
            </StyledNavLink>
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
