import { useSelector, useDispatch } from "react-redux";
import { SectionButtons } from "./styled";
import Button from "../../Button/styled";
import { selectAreTasksEmpty, selectHideDone, selectIsEveryTaskDone, setAllDone, toggleHideDone } from "../../tasksSlice";

const Buttons = () => {
  const dispatch = useDispatch();
  const hideDone = useSelector(selectHideDone);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone)
  const areTasksEmpty = useSelector(selectAreTasksEmpty)

  return (
    <SectionButtons>
      {!areTasksEmpty && (
        <>
        <Button onClick={() => dispatch(toggleHideDone())}>
        {hideDone ? "Pokaż" : "Ukryj"} ukończone
      </Button>
      <Button 
      disabled={isEveryTaskDone}
      onClick={() => dispatch(setAllDone())}>Ukończ wszystkie</Button></>
      ) }
    </SectionButtons>
  );
};

export default Buttons;
