import { useState, useRef } from "react";
// import { useDispatch } from "react-redux";
import { StyledForm, Button } from "./styled";
import Input from "../../Input";
// import { addTask } from "../../tasksSlice";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const setFocus = () => {
    inputRef.current.focus();
  };

//   const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimmedNewTaskContent = newTaskContent.trim();
    if (!trimmedNewTaskContent) {
      return;
    }

    // dispatch(
    //   addTask({
    //     content: trimmedNewTaskContent,
    //     done: false,
    //     id: nanoid(),
    //   })
    // );
    setNewTaskContent("");
    setFocus();
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        value={newTaskContent}
        placeholder="Co jest do zrobienia?"
        onChange={(event) => setNewTaskContent(event.target.value)}
      />
      <Button>Dodaj zadanie</Button>
    </StyledForm>
  );
};

export default Form;
