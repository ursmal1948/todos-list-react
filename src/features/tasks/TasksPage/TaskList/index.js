// import { Link, useLocation } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
import { List, Item, Content, Button, StyledNavLink } from "./styled";
// import {
//   toggleTaskDone,
//   removeTask,
//   selectHideDone,
//   selectTasksByQuery,
// } from "../../tasksSlice";
// import searchQueryParamName from "../searchQueryParamName";
import tasks from "../../pureTasks";

const TaskList = () => {
//   const location = useLocation();
//   const query = new URLSearchParams(location.search).get(searchQueryParamName);

//   const tasks = useSelector((state) => selectTasksByQuery(state, query));
//   const hideDone = useSelector(selectHideDone);
//   const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id}>
          <Button done >
            {task.done ? "✔" : ""}
          </Button>
          <Content done={task.done}>
            {/* <StyledNavLink to={`/zadania/${task.id}`}>{task.content}</StyledNavLink> */}
            {task.content}
          </Content>
          <Button remove>
            🗑
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;
