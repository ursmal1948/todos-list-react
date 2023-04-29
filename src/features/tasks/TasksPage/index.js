import { useSelector } from "react-redux";
import { selectError } from "../tasksSlice";
import Form from "./Form/index";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";

import ExampleTasksButton from "./ExampleTasksButton";
import ErrorModal from "./ErrorModal";
import Search from "./Search";

function TasksPage() {
  const error = useSelector(selectError);
  return (
    <Container>
      {!error ? (
        <>
          <Header title="Lista zadań  " />
          <Section
            title="Dodaj nowe zadanie"
            extraHeaderContent={<ExampleTasksButton />}
            body={<Form />}
          />
          <Section title="Wyszukiwarka" body={<Search />} />
          <Section
            title="Lista zadań"
            extraHeaderContent={<Buttons />}
            body={<TaskList />}
          />
        </>
      ) : (
        <Section title="Wykryto błąd" body={<ErrorModal />} />
      )}
    </Container>
  );
}

export default TasksPage;
