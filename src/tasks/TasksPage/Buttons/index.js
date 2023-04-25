import { useSelector, useDispatch } from "react-redux";
import { SectionButtons } from "./styled";
import Button from "../../Button/styled";
// import {
//   toggleHideDone,
//   setAllDone,
//   selectHideDone,
//   selectAreTasksEmpty,
//   selectIsEveryTaskDone,
// } from "../../tasksSlice";

const Buttons = () => {
  //   const hideDone = useSelector(selectHideDone);
  //   const areTasksEmpty = useSelector(selectAreTasksEmpty);
  //   const isEveryTaskDone = useSelector(selectIsEveryTaskDone);

  //   const dispatch = useDispatch();

  return (
    <SectionButtons>
      <Button>Pokaż ukończone</Button>
      <Button>Ukończ wszystkie</Button>
    </SectionButtons>
  );
};

export default Buttons;
