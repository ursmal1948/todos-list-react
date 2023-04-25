import { useSelector, useDispatch } from "react-redux";
import { SectionButtons } from "./styled";
import Button from "../../Button/styled";
import { selectHideDone, setAllDone, toggleHideDone } from "../../tasksSlice";

const Buttons = () => {
  const dispatch = useDispatch();
  const hideDone = useSelector(selectHideDone);

  return (
    <SectionButtons>
      <Button onClick={() => dispatch(toggleHideDone())}>
        {hideDone ? "Pokaż" : "Ukryj"} ukończone
      </Button>
      <Button onClick={() => dispatch(setAllDone())}>Ukończ wszystkie</Button>
    </SectionButtons>
  );
};

export default Buttons;
